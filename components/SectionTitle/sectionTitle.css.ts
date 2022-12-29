import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const container = style({
  display: "flex",
  alignItems: "center",
  flex: 1,
  marginBottom: theme.space.extraLarge,
})

export const textContainer = styleVariants({
  center: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.space.extraLarge,
    marginRight: theme.space.extraLarge,
  },
  left: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.space.extraLarge,
  },
})

export const title = style({
  color: theme.colors.text.normal,
  fontSize: "1.8rem",
  margin: 0,
})

export const number = style({
  color: theme.colors.primary,
  fontSize: theme.fontSize.medium,
  fontFamily: theme.fonts.monospace,
  width: "50px",
})

export const line = style({
  height: "1px",
  width: "280px",
  backgroundColor: theme.colors.grey,
})

export const subtitle = styleVariants({
  center: {
    textAlign: "center",
  },
  left: {
    marginLeft: "50px",
  },
})
