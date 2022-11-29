import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "./theme.css"

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: theme.fonts.sans,
  background: theme.colors.background,
  color: theme.colors.text.dimmed,
})

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
})

globalStyle("*", {
  boxSizing: "border-box",
})

export const container = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
})

export const main = style({
  margin: "0px auto",
  width: "100%",
  minHeight: "100vh",
  padding: "0px 150px",
})
