import { style, keyframes } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const gradient = style({
  width: "500px",
  height: "500px",
  animationName: rotate,
  animationDuration: "25s",
  animationDirection: "normal",
  animationIterationCount: "infinite",
  animationTimingFunction: theme.transition,
  filter: "blur(100px)",
  backgroundImage: `linear-gradient(rgba(0, 227, 169,0.80),#0086DE)`,
  borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%",
  "@media": {
    "screen and (max-width:576px)": {
      height: "250px",
      width: "250px",
      filter: "blur(60px)",
      animationDuration: "20s",
    },
  },
})

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
    },
  },
})
