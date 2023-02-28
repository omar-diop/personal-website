import { style } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const header = style({
  padding: " 0px 50px",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.colors.background,
  "@media": {
    "screen and (max-width:768px)": {
      padding: " 0px 40px",
    },
    "screen and (max-width:576px)": {
      padding: " 0px 25px",
    },
  },
})

export const nav = style({
  display: "flex",
  position: "relative",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  color: theme.colors.text.dimmed,
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.small,
  fontWeight: theme.fontWeight.regular,
  "@media": {
    "screen and (max-width: 992px)": {
      fontSize: theme.fontSize.extraSmall,
    },
  },
})

export const logo = style({
  fontSize: theme.fontSize.medium,
  fontFamily: theme.fonts.sans,
  fontWeight: theme.fontWeight.bold,
  color: theme.colors.text.normal,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: theme.fontSize.small,
    },
  },
})

export const links = style({
  display: "flex",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
})

export const list = style({
  padding: 0,
  margin: 0,
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginRight: theme.space.large,
})

export const link = style({
  margin: "0 5px",
  padding: "10px",
  position: "relative",
  transition: theme.transition,
  ":hover": {
    color: theme.colors.primary,
  },
})

export const prefix = style({
  color: theme.colors.primary,
  fontSize: theme.fontSize.extraSmall,
  fontWeight: theme.fontWeight.regular,
  marginRight: theme.space.medium,
})
