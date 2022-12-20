import { style } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"
import { styleVariants } from "@vanilla-extract/css"

const base = style({
  color: theme.colors.primary,
  fontFamily: theme.fonts.monospace,
  fontWeight: theme.fontWeight.regular,
  borderRadius: theme.borderRadius,
  border: `1px solid ${theme.colors.primary}`,
  ":hover": {
    outline: "none",
    backgroundColor: "rgba(0,227,169,0.1)",
  },
  transition: theme.transition,
})

export const button = styleVariants({
  small: [
    base,
    {
      fontSize: theme.fontSize.small,
      padding: "0.8rem 1.5rem",
      lineHeight: theme.fontSize.small,
    },
  ],
  big: [
    base,
    {
      fontSize: theme.fontSize.medium,
      padding: "1rem 2rem",
      lineHeight: theme.fontSize.medium,
    },
  ],
})
