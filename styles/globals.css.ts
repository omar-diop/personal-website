import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "./theme.css"

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: theme.fonts.sans,
  background: theme.colors.background,
  color: theme.colors.text.dimmed,
  overflowX: "hidden",
})

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
})

globalStyle("strong", {
  color: theme.colors.primary,
  fontWeight: theme.fontWeight.bold,
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
  "@media": {
    "screen and (max-width: 992px)": {
      padding: "0px 100px",
    },
    "screen and (max-width: 768px)": {
      padding: "0px 40px",
    },
    "screen and (max-width:576px)": {
      padding: "0px 25px",
    },
  },
})

export const openedSide = style({
  position: "fixed",
})

globalStyle(`${openedSide}  #mainContainer > *`, {
  filter: "blur(6px) brightness(0.65)",
  transition: theme.transition,
  pointerEvents: "none",
  userSelect: "none",
})
