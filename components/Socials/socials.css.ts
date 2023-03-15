import { styleVariants } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const container = styleVariants({
  desktop: {
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
  },
  mobile: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.space.large,
    "@media": {
      "screen and (min-width: 769px)": {
        display: "none",
      },
    },
  },
})

export const link = styleVariants({
  desktop: {
    padding: theme.space.medium,
    paddingLeft: theme.space.large,
    paddingRight: theme.space.large,
    transition: theme.transition,
    ":hover": {
      transform: "scale(1.1)",
    },
  },
  mobile: {
    paddingLeft: theme.space.large,
    paddingRight: theme.space.large,
    transition: theme.transition,
    ":hover": {
      transform: "scale(1.1)",
    },
  },
})

export const icon = styleVariants({
  desktop: {
    width: "1.5rem",
    height: "1.5rem",
    color: theme.colors.text.dimmed,
    transition: theme.transition,
    ":hover": {
      color: theme.colors.primary,
    },
  },
  mobile: {
    width: "1.5rem",
    height: "1.5rem",
    color: theme.colors.text.dimmed,
    transition: theme.transition,
    ":hover": {
      color: theme.colors.primary,
    },
  },
})
