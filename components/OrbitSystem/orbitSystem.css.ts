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

// One star blinks S-T-A-Y in Morse code, looping. Murph, are you
// reading? Each pair is [on, off] in Morse units (dot 1, dash 3,
// intra-letter gap 1, letter gap 3, word gap 7).
const morsePairs: Array<[number, number]> = [
  [1, 1], [1, 1], [1, 3], // S: dot dot dot
  [3, 3], // T: dash
  [1, 1], [3, 3], // A: dot dash
  [3, 1], [1, 1], [3, 1], [3, 7], // Y: dash dot dash dash
]

const morseTotal = morsePairs.reduce((sum, [on, off]) => sum + on + off, 0)

const stayFrames: Record<string, { opacity: number }> = {
  "0%": { opacity: 0.15 },
  "100%": { opacity: 0.15 },
}
{
  const pct = (u: number) => `${((u / morseTotal) * 100).toFixed(2)}%`
  let t = 0
  for (const [on, off] of morsePairs) {
    if (t > 0) stayFrames[pct(t - 0.1)] = { opacity: 0.15 }
    stayFrames[pct(t)] = { opacity: 1 }
    stayFrames[pct(t + on)] = { opacity: 1 }
    stayFrames[pct(t + on + 0.1)] = { opacity: 0.15 }
    t += on + off
  }
}

const stay = keyframes(stayFrames)

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
  "@media": {
    "screen and (max-width:576px)": {
      justifyContent: "center",
      alignItems: "flex-start",
    },
  },
})

// Breaks out of the page container to span the real viewport width, so
// stars reach the screen edges and the astronaut enters/exits from
// them instead of from the title container. Relies on the global
// overflow-x: hidden to avoid a horizontal scrollbar.
export const spaceLayer = style({
  position: "absolute",
  top: 0,
  left: "50%",
  width: "100vw",
  height: "100%",
  marginLeft: "-50vw",
  overflow: "hidden",
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

export const morseStar = style({
  position: "absolute",
  top: "15%",
  left: "13%",
  width: "3px",
  height: "3px",
  borderRadius: "50%",
  backgroundColor: "#ffffff",
  boxShadow: "0 0 8px 2px rgba(255,255,255,0.45)",
  opacity: 0.15,
  // ~12.6s per loop with a 0.3s Morse unit
  animation: `${stay} ${morseTotal * 0.3}s linear infinite`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationPlayState: "paused",
    },
  },
})

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
  cursor: "pointer",
  transition: "transform 1.6s cubic-bezier(0.34, 1.3, 0.64, 1)",
})

export const sunCollapsed = style({
  transform: `rotateX(-${tilt}deg) scale(0.03)`,
  transition: "transform 1.9s cubic-bezier(0.7, -0.1, 1, 0.7)",
})

export const sunGlowHidden = style({
  animation: "none",
  opacity: 0,
  transition: "opacity 0.9s ease",
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

// The shell owns the collapse/rebirth scale (a transition), the orbit
// inside owns the spin (an animation): they must live on different
// elements or they would fight over the same transform.
export const orbitShell = styleVariants(orbits, (o) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: `${o.size}px`,
  height: `${o.size}px`,
  marginTop: `${-o.size / 2}px`,
  marginLeft: `${-o.size / 2}px`,
  transformStyle: "preserve-3d",
  // rebirth spring; the collapse easing lives on shellCollapsed
  transition: "transform 1.6s cubic-bezier(0.34, 1.3, 0.64, 1)",
}))

export const shellCollapsed = style({
  transform: "scale(0.04)",
  transition: "transform 1.9s cubic-bezier(0.7, -0.1, 1, 0.7)",
})

export const orbit = styleVariants(orbits, (o) => ({
  position: "absolute",
  inset: 0,
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

const shimmer = keyframes({
  "0%": { opacity: 0.85 },
  "50%": { opacity: 1 },
  "100%": { opacity: 0.85 },
})

const flashBoom = keyframes({
  "0%": { transform: "scale(0.3)", opacity: 0.95 },
  "100%": { transform: "scale(9)", opacity: 0 },
})

const blink = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0 },
  "100%": { opacity: 1 },
})

// Gargantua: black event horizon, thin photon ring, a lensing halo and
// the warm accretion disk crossing edge-on in front.
export const gargantua = style({
  position: "absolute",
  inset: 0,
  opacity: 0,
  pointerEvents: "none",
  transition: "opacity 0.9s ease",
})

export const gargantuaOn = style({
  opacity: 1,
})

export const bhHalo = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "150px",
  height: "150px",
  margin: "-75px 0 0 -75px",
  borderRadius: "50%",
  border: "2px solid rgba(255,190,120,0.7)",
  filter: "blur(1.5px)",
  boxShadow: "0 0 30px 4px rgba(255,150,60,0.25)",
})

export const bhHorizon = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "96px",
  height: "96px",
  margin: "-48px 0 0 -48px",
  borderRadius: "50%",
  backgroundColor: "#000000",
  boxShadow:
    "0 0 3px 2px rgba(255,220,180,0.9), 0 0 60px 14px rgba(255,140,50,0.28)",
})

export const bhDisk = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "250px",
  height: "20px",
  margin: "-10px 0 0 -125px",
  borderRadius: "50%",
  backgroundImage:
    "linear-gradient(90deg, transparent, rgba(255,200,140,0.9) 18%, #FFF3E0 50%, rgba(255,200,140,0.9) 82%, transparent)",
  filter: "blur(1px)",
  animation: `${shimmer} 3s ease-in-out infinite`,
})

export const flash = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "60px",
  height: "60px",
  margin: "-30px 0 0 -30px",
  borderRadius: "50%",
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.95), rgba(0,227,169,0.4) 60%, transparent 75%)",
  animation: `${flashBoom} 1s ease-out forwards`,
  pointerEvents: "none",
})

export const statusText = styleVariants(
  {
    singularity: { color: "#FFB46B" },
    reborn: { color: "#00E3A9" },
  },
  (v) => ({
    position: "absolute",
    top: "calc(50% + 105px)",
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: theme.fonts.monospace,
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
    color: v.color,
  })
)

export const blinkCursor = style({
  animation: `${blink} 1s steps(1) infinite`,
})

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
