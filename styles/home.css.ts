import { style, keyframes } from "@vanilla-extract/css"
import { theme } from "./theme.css"

export const section = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: "100px auto",
  padding: "100px 0px",
  maxWidth: "1000px",
  backgroundColor: "grey",
})

export const heroSection = style({
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  minHeight: "100vh",
  padding: "0px",
  zIndex: 1,
})
