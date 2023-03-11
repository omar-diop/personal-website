import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const hamburgerButton = style({
  height: "30px",
  width: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  border: 0,
  padding: 0,
  zIndex: 101,
  "@media": {
    "screen and (min-width: 769px)": {
      display: "none",
    },
  },
})

const baseMiddleLine = style({
  position: "relative",
  background: "white",
  height: "2px",
  width: "100%",
  transition: theme.transition,
  "::before": {
    content: "",
    position: "absolute",
    left: "-5px",
    top: "-12px",
    background: "white",
    width: "100%",
    height: "2px",
    transition: theme.transition,
  },
  "::after": {
    content: "",
    position: "absolute",
    left: "-5px",
    top: "12px",
    background: "white",
    width: "100%",
    height: "2px",
    transition: theme.transition,
  },
})

export const middleLine = styleVariants({
  opened: [
    baseMiddleLine,
    {
      background: "rgba(0,0,0,0)",
      "::before": {
        top: 0,
        transform: "rotate(45deg)",
      },
      "::after": {
        top: 0,
        transform: "rotate(135deg)",
      },
    },
  ],
  closed: [baseMiddleLine],
})

export const nav = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  color: theme.colors.text.dimmed,
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.small,
  fontWeight: theme.fontWeight.regular,
})

export const links = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

export const list = style({
  padding: 0,
  margin: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
})

export const link = style({
  margin: "0 5px",
  padding: "10px",
  position: "relative",
  fontSize: theme.fontSize.small,
  transition: theme.transition,
  marginBottom: theme.space.large,
  ":hover": {
    color: theme.colors.primary,
  },
  ":last-of-type": {
    marginBottom: "3rem",
  },
})

export const prefix = style({
  color: theme.colors.primary,
  fontSize: theme.fontSize.extraSmall,
  fontWeight: theme.fontWeight.regular,
  marginRight: theme.space.medium,
})

const baseMenu = style({
  position: "fixed",
  right: 0,
  top: 0,
  bottom: 0,
  height: "100vh",
  backgroundColor: theme.colors.lightBackground,
  transition: theme.transition,
  display: "flex",
  "@media": {
    "screen and (min-width: 769px)": {
      display: "none",
    },
  },
})

export const menu = styleVariants({
  opened: [
    baseMenu,
    {
      width: "70%",
      boxShadow: "rgb(0, 0, 0)  -10px 0px 30px -15px",
    },
  ],
  closed: [
    baseMenu,
    {
      width: "0%",
    },
  ],
})
