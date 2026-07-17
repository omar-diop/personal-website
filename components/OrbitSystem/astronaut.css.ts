import { style, keyframes } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

const drift = keyframes({
  "0%": { transform: "translate(0, 0)" },
  "100%": {
    transform: "translate(calc(100vw + 240px), var(--drift-y, -40px))",
  },
})

const tumble = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

// Quick "stand to attention" pop when clicked; the waving is done by
// the arm itself, not the whole body.
const attention = keyframes({
  "0%": { transform: "rotate(0deg) scale(1)" },
  "40%": { transform: "rotate(-8deg) scale(1.12)" },
  "100%": { transform: "rotate(0deg) scale(1)" },
})

const wave = keyframes({
  "0%": { transform: "rotate(-14deg)" },
  "20%": { transform: "rotate(-155deg)" },
  "35%": { transform: "rotate(-125deg)" },
  "50%": { transform: "rotate(-155deg)" },
  "65%": { transform: "rotate(-125deg)" },
  "80%": { transform: "rotate(-155deg)" },
  "100%": { transform: "rotate(-14deg)" },
})

const blink = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0 },
  "100%": { opacity: 1 },
})

export const flight = style({
  position: "absolute",
  left: "-120px",
  zIndex: 1,
  cursor: "pointer",
  animationName: drift,
  animationTimingFunction: "linear",
  animationFillMode: "forwards",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      display: "none",
    },
  },
})

export const flightPaused = style({
  animationPlayState: "paused",
})

export const body = style({
  display: "block",
  animation: `${tumble} 16s linear infinite`,
})

export const bodySaluting = style({
  animation: `${attention} 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)`,
  animationFillMode: "forwards",
})

// Arm groups live inside a <g> translated onto the shoulder joint, so
// rotating about the local 0,0 swings them from the shoulder.
export const armRight = style({
  transform: "rotate(-14deg)",
  transformOrigin: "0px 0px",
})

export const armRightWaving = style({
  animation: `${wave} 2.6s ease-in-out`,
  transformOrigin: "0px 0px",
})

export const armLeft = style({
  transform: "rotate(14deg)",
  transformOrigin: "0px 0px",
})

export const bubble = style({
  position: "absolute",
  bottom: "calc(100% + 10px)",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "0.3rem 0.6rem",
  whiteSpace: "nowrap",
  backgroundColor: theme.colors.lightBackground,
  border: "1px solid rgba(0,227,169,0.4)",
  borderRadius: theme.borderRadius,
  fontFamily: theme.fonts.monospace,
  fontSize: "0.75rem",
  color: theme.colors.primary,
})

export const cursor = style({
  animation: `${blink} 1s steps(1) infinite`,
})
