import { style } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const container = style({
  background: theme.colors.background,
  overflow: "hidden",
  position: "fixed",
  height: "100%",
  width: "100%",
  zIndex: 1000,
  left: "0",
  top: "0",
  opacity: 1,
  transition: "opacity 1s cubic-bezier(0.645,0.045,0.355,1)",
})
