import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

const HEADER_HEIGHT = 100
const MOBILE_HEADER_HEIGHT = 70

const base = style({
  padding: " 0px 50px",
  position: "fixed",
  top: 0,
  zIndex: 101,
  width: "100%",
  height: `${HEADER_HEIGHT}px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: theme.transition,
  "@media": {
    "screen and (max-width:768px)": {
      padding: " 0px 40px",
    },
    "screen and (max-width:576px)": {
      padding: " 0px 25px",
      height: `${MOBILE_HEADER_HEIGHT}px`,
    },
  },
})

export const header = styleVariants({
  top: [base],
  up: [
    base,
    {
      transform: "translateY(0px)",
      backgroundColor: "rgba(12,12,12,0.80)",
      backdropFilter: "blur(10px)",
      boxShadow: theme.boxShadow,
    },
  ],
  down: [
    base,
    {
      transform: `translateY(calc(${HEADER_HEIGHT}px * -1))`,
      backgroundColor: "rgba(12,12,12,0.80)",
      backdropFilter: "blur(10px)",
      boxShadow: theme.boxShadow,
      "@media": {
        "screen and (max-width:576px)": {
          transform: `translateY(calc(${MOBILE_HEADER_HEIGHT}px * -1))`,
        },
      },
    },
  ],
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
  position: "relative",
  width: "80px",
  height: "80px",
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
