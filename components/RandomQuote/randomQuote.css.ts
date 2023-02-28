import { style, keyframes } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

const typing = keyframes({
  "0%": { width: 0 },
  "25%": { width: "70%" },
  "48%": { width: "100%" },
  "50%": { width: "100%" },
  "55% ": { width: "100%" },
  "75%": { width: "70%" },
  "90% ": { width: "30%" },
  "100%": { width: 0 },
})

const cursor = keyframes({
  "from, to": { borderColor: "transparent" },
  "50%": { borderColor: theme.colors.primary },
})

export const text = style({
  color: theme.colors.text.normal,
  fontWeight: theme.fontWeight.bold,
  fontSize: "4rem",
  fontFamily: theme.fonts.monospace,
  letterSpacing: "-0.05em",
  margin: 0,
  width: 0,
  overflow: "hidden",
  borderRight: `.5em solid ${theme.colors.primary}`,
  whiteSpace: "nowrap",
  animation: `${typing} 5s steps(7) infinite ,${cursor} 0.7s  infinite`,
  animationFillMode: "forwards",
  "@media": {
    "screen and (max-width: 992px)": {
      fontSize: "2.5rem",
    },
    "screen and (max-width: 768px)": {
      fontSize: "2rem",
    },
    "screen and (max-width: 576px)": {
      fontSize: "1.6rem",
    },
  },
})

export const terminal = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "2rem",
})

export const symbol = style({
  fontSize: "4rem",
  color: theme.colors.primary,
  fontWeight: theme.fontWeight.bold,
  whiteSpace: "nowrap",
  marginRight: theme.space.medium,
  "@media": {
    "screen and (max-width: 992px)": {
      fontSize: "2.5rem",
    },
    "screen and (max-width: 768px)": {
      fontSize: "2rem",
    },
  },
})
