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
    "0 0 40px 8px rgba(0,227,169,0.35), 0 0 100px 35px rgba(0,134,222,0.2)",
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

export const dot = styleVariants(orbits, (o) => ({
  position: "absolute",
  top: `${-o.dot / 2}px`,
  left: `${-o.dot / 2}px`,
  width: `${o.dot}px`,
  height: `${o.dot}px`,
  borderRadius: "50%",
  backgroundColor: o.color,
  boxShadow: `0 0 14px 3px ${o.color}59`,
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
