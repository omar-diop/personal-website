import { style } from "@vanilla-extract/css"

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
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "flex-start",
  minHeight: "100vh",
  padding: "0px",
})
