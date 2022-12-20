import { style } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const container = style({
  position: "fixed",
  width: "40px",
  bottom: "0px",
  left: "auto",
  right: "40px",
  zIndex: 100,
  color: theme.colors.text.normal,
})
