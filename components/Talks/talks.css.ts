import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const container = style({
  display: "flex",
  marginBottom: "3rem",
  alignItems: "center",
})

export const talksList = style({
  backgroundColor: theme.colors.darkGrey,
  borderRadius: theme.borderRadius,
  padding: "2rem",
  paddingLeft: "4rem",
  minHeight: "380px",
  minWidth: "700px",
  marginLeft: `-2rem`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: theme.boxShadow,
  "@media": {
    "screen and (max-width: 1200px)": {
      width: "100%",
      minWidth: "400px",
    },
    "screen and (max-width: 576px)": {
      width: "100%",
      maxWidth: "100%",
      minWidth: "100%",
      marginLeft: 0,
      padding: "1.5rem",
    },
  },
})

export const image = style({
  objectFit: "cover",
  borderRadius: theme.borderRadius,
  boxShadow: theme.boxShadow,
  zIndex: 100,
  "@media": {
    "screen and (max-width: 576px)": {
      display: "none",
    },
  },
})

export const talk = style({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: theme.space.large,
})

export const date = style({
  color: theme.colors.primary,
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.extraSmall,
  marginBottom: theme.space.small,
})

export const listItem = style({
  color: theme.colors.primary,
  fontSize: theme.fontSize.small,
  marginRight: theme.space.medium,
})

export const eventTitle = style({
  display: "flex",
  alignItems: "center",
  color: theme.colors.text.normal,
  fontWeight: theme.fontWeight.bold,
  fontFamily: theme.fonts.sans,
  fontSize: "1.3rem",
  marginBottom: theme.space.medium,
})

export const talkTitle = style({
  margin: 0,
})

export const badge = styleVariants({
  talk: {
    padding: `${theme.space.extraSmall} ${theme.space.medium}`,
    borderRadius: "2rem",
    fontSize: theme.fontSize.extraSmall,
    backgroundColor: "rgba(0,227,169,0.1)",
    marginLeft: theme.space.medium,
    color: theme.colors.primary,
    fontWeight: theme.fontWeight.semiBold,
  },
  interview: {
    padding: `${theme.space.extraSmall} ${theme.space.medium}`,
    borderRadius: "2rem",
    fontSize: theme.fontSize.extraSmall,
    backgroundColor: "rgba(0,134,222,0.1)",
    marginLeft: theme.space.medium,
    color: theme.colors.blue,
    fontWeight: theme.fontWeight.semiBold,
  },
})
