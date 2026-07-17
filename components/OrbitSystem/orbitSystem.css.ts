import { style, styleVariants, keyframes } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

// Tilt of the whole system: planets must counter-rotate by the same
// amount to stay facing the camera, so keep these two in sync.
const tilt = 64

const spin = keyframes({
  "0%": { transform: "rotateZ(0deg)" },
  "100%": { transform: "rotateZ(360deg)" },
})

const counterSpin = keyframes({
  "0%": { transform: `rotateZ(0deg) rotateX(-${tilt}deg)` },
  "100%": { transform: `rotateZ(-360deg) rotateX(-${tilt}deg)` },
})

// Fakes near/far depth: the planet starts at the left of its orbit and
// spins clockwise, so it is farthest (top of the ellipse) at 25% of the
// period and nearest (bottom) at 75%.
const depthCycle = keyframes({
  "0%": { transform: "scale(0.9)", opacity: 0.8 },
  "25%": { transform: "scale(0.72)", opacity: 0.5 },
  "50%": { transform: "scale(0.9)", opacity: 0.8 },
  "75%": { transform: "scale(1.08)", opacity: 1 },
  "100%": { transform: "scale(0.9)", opacity: 0.8 },
})

const pulse = keyframes({
  "0%": { transform: `rotateX(-${tilt}deg) scale(1)`, opacity: 0.6 },
  "50%": { transform: `rotateX(-${tilt}deg) scale(1.2)`, opacity: 1 },
  "100%": { transform: `rotateX(-${tilt}deg) scale(1)`, opacity: 0.6 },
})

const twinkle = keyframes({
  "0%": { opacity: 0.4 },
  "50%": { opacity: 1 },
  "100%": { opacity: 0.4 },
})

const shoot = keyframes({
  "0%": { transform: "rotate(-30deg) translateX(0)", opacity: 0 },
  "1%": { opacity: 1 },
  "6%": { transform: "rotate(-30deg) translateX(-460px)", opacity: 0 },
  "100%": { transform: "rotate(-30deg) translateX(-460px)", opacity: 0 },
})

// Deterministic PRNG: this file runs at build time, so the star field
// must come out identical on every evaluation or SSR markup and client
// CSS would drift apart.
const rand = (() => {
  let seed = 20260717
  return () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }
})()

const starField = (count: number, alpha: number) =>
  Array.from(
    { length: count },
    () =>
      `${(rand() * 100).toFixed(1)}vw ${(rand() * 100).toFixed(1)}vh 0 rgba(255,255,255,${alpha})`
  ).join(", ")

const starLayers = {
  far: { count: 60, size: 1, alpha: 0.4, duration: "9s", delay: "0s" },
  mid: { count: 25, size: 2, alpha: 0.5, duration: "6s", delay: "-2s" },
  near: { count: 10, size: 2.5, alpha: 0.8, duration: "4s", delay: "-1s" },
}

// Theme accent colors as plain hex so we can derive alpha glows,
// which CSS variables from the theme contract don't allow.
const orbits = {
  engineering: {
    size: 240,
    duration: "14s",
    delay: "-3s",
    color: "#00E3A9",
    dot: 12,
  },
  product: {
    size: 400,
    duration: "22s",
    delay: "-12s",
    color: "#56A1FF",
    dot: 14,
  },
  growth: {
    size: 560,
    duration: "34s",
    delay: "-21s",
    color: "#FF703B",
    dot: 16,
  },
}

export type OrbitKey = keyof typeof orbits

export const background = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  overflow: "hidden",
  "@media": {
    "screen and (max-width:576px)": {
      justifyContent: "center",
      alignItems: "flex-start",
    },
  },
})

// Invisible 1-star element: the whole field lives in its box-shadow.
export const stars = styleVariants(starLayers, (l) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: `${l.size}px`,
  height: `${l.size}px`,
  borderRadius: "50%",
  boxShadow: starField(l.count, l.alpha),
  animation: `${twinkle} ${l.duration} ease-in-out infinite`,
  animationDelay: l.delay,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationPlayState: "paused",
    },
  },
}))

export const shootingStar = style({
  position: "absolute",
  top: "18%",
  left: "62%",
  width: "110px",
  height: "2px",
  borderRadius: "2px",
  backgroundImage:
    "linear-gradient(90deg, rgba(255,255,255,0.9), transparent)",
  boxShadow: "0 0 6px rgba(255,255,255,0.3)",
  opacity: 0,
  animation: `${shoot} 16s linear infinite`,
  animationDelay: "4s",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      display: "none",
    },
  },
})

export const scene = style({
  position: "relative",
  width: "560px",
  height: "560px",
  marginRight: "6rem",
  "@media": {
    "screen and (max-width:992px)": {
      marginRight: "2rem",
    },
    "screen and (max-width:576px)": {
      marginRight: 0,
      marginTop: "-8rem",
      transform: "scale(0.5)",
    },
  },
})

export const system = style({
  position: "absolute",
  inset: 0,
  transformStyle: "preserve-3d",
  transform: `rotateX(${tilt}deg)`,
})

export const sun = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "72px",
  height: "72px",
  margin: "-36px 0 0 -36px",
  borderRadius: "50%",
  transform: `rotateX(-${tilt}deg)`,
  backgroundImage: "linear-gradient(135deg, rgba(0,227,169,0.9), #0086DE)",
  boxShadow:
    "0 0 40px 8px rgba(0,227,169,0.28), 0 0 100px 35px rgba(0,134,222,0.15)",
})

export const sunGlow = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "150px",
  height: "150px",
  margin: "-75px 0 0 -75px",
  borderRadius: "50%",
  backgroundImage:
    "radial-gradient(circle, rgba(0,227,169,0.3), rgba(0,134,222,0.12) 55%, transparent 72%)",
  animation: `${pulse} 5s ease-in-out infinite`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationPlayState: "paused",
    },
  },
})

export const orbit = styleVariants(orbits, (o) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: `${o.size}px`,
  height: `${o.size}px`,
  marginTop: `${-o.size / 2}px`,
  marginLeft: `${-o.size / 2}px`,
  borderRadius: "50%",
  border: "1px solid rgba(169,169,169,0.25)",
  transformStyle: "preserve-3d",
  animation: `${spin} ${o.duration} linear infinite`,
  animationDelay: o.delay,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationPlayState: "paused",
    },
  },
}))

// Rotates together with the orbit: the colored arc ends where the
// planet sits (left of the ring, 270deg in conic terms) and fades out
// over the quarter turn it just travelled.
export const trail = styleVariants(orbits, (o) => ({
  position: "absolute",
  inset: "-1px",
  borderRadius: "50%",
  backgroundImage: `conic-gradient(from 180deg, ${o.color}00 0deg, ${o.color}80 90deg, transparent 90deg)`,
  WebkitMask:
    "radial-gradient(closest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2px))",
  mask: "radial-gradient(closest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2px))",
}))

export const planetAnchor = style({
  position: "absolute",
  top: "50%",
  left: 0,
  width: 0,
  height: 0,
  transformStyle: "preserve-3d",
})

export const planet = styleVariants(orbits, (o) => ({
  position: "absolute",
  animation: `${counterSpin} ${o.duration} linear infinite`,
  animationDelay: o.delay,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationPlayState: "paused",
    },
  },
}))

export const depth = styleVariants(orbits, (o) => ({
  position: "absolute",
  animation: `${depthCycle} ${o.duration} linear infinite`,
  animationDelay: o.delay,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationPlayState: "paused",
    },
  },
}))

export const dot = styleVariants(orbits, (o) => ({
  position: "absolute",
  top: `${-o.dot / 2}px`,
  left: `${-o.dot / 2}px`,
  width: `${o.dot}px`,
  height: `${o.dot}px`,
  borderRadius: "50%",
  backgroundColor: o.color,
  backgroundImage:
    "radial-gradient(circle at 32% 32%, rgba(255,255,255,0.55), rgba(255,255,255,0) 55%)",
  boxShadow: `inset -2px -2px 5px rgba(0,0,0,0.45), 0 0 14px 3px ${o.color}59`,
}))

export const label = styleVariants(orbits, (o) => ({
  position: "absolute",
  left: `${o.dot / 2 + 10}px`,
  top: 0,
  transform: "translateY(-50%)",
  color: o.color,
  fontFamily: theme.fonts.monospace,
  fontSize: "0.8rem",
  letterSpacing: "0.05em",
  whiteSpace: "nowrap",
  "@media": {
    "screen and (max-width:576px)": {
      fontSize: "1.05rem",
    },
  },
}))
