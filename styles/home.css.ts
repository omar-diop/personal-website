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
  minHeight: "90vh",
  padding: "0px",
  zIndex: 100,
})

export const nameContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
})

export const nameText = style({
  color: theme.colors.text.normal,
  fontWeight: theme.fontWeight.bold,
  fontSize: "4.5rem",
  margin: 0,
})

export const preText = style({
  color: theme.colors.primary,
  fontFamily: theme.fonts.monospace,
  fontWeight: theme.fontWeight.regular,
  fontSize: theme.fontSize.medium,
  margin: 0,
  marginBottom: theme.space.medium,
})
