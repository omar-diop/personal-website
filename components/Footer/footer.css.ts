import { style } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const container = style({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  minHeight: "80px",
  padding: "15px",
  textAlign: "center",
  fontSize: theme.fontSize.extraSmall,
  color: theme.colors.grey,
})
