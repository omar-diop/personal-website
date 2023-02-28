import { style } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const container = style({
  position: "fixed",
  width: "40px",
  bottom: "0px",
  left: "auto",
  right: "40px",
  zIndex: 100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: theme.colors.text.normal,
  "::after": {
    content: "",
    display: "block",
    width: "1px",
    height: "100px",
    marginTop: theme.space.medium,
    backgroundColor: theme.colors.grey,
  },
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
})

export const link = style({
  padding: theme.space.medium,
  paddingLeft: theme.space.large,
  paddingRight: theme.space.large,
  transition: theme.transition,
  ":hover": {
    transform: "scale(1.1)",
  },
})

export const icon = style({
  width: "1.5rem",
  height: "1.5rem",
  color: theme.colors.grey,
  transition: theme.transition,
  ":hover": {
    color: theme.colors.primary,
  },
})
