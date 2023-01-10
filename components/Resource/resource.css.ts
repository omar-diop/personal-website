import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const container = style({
  display: "flex",
  marginBottom: "100px",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
})

const imageBase = style({
  objectFit: "cover",
  borderRadius: theme.borderRadius,
  height: "auto",
  width: "60%",
  transition: theme.transition,
  ":hover": {
    transform: "scale(1.01)",
    filter: "brightness(80%)",
  },
  filter: "brightness(40%)",
})

const contentBase = style({
  width: "40%",
  zIndex: 10,
})

const tagsbase = style({
  display: "flex",
  flexWrap: "wrap",
  position: "relative",
  margin: "25px 0px 10px",
  padding: "0px",
  listStyle: "none",
})

export const image = styleVariants({
  left: [
    imageBase,
    {
      order: 1,
    },
  ],
  right: [
    imageBase,
    {
      order: 2,
      marginLeft: "-5rem",
    },
  ],
})

export const content = styleVariants({
  left: [
    contentBase,
    {
      order: 2,
      marginLeft: "-5rem",
      textAlign: "right",
    },
  ],
  right: [
    contentBase,
    {
      order: 1,
    },
  ],
})

export const tags = styleVariants({
  left: [
    tagsbase,
    {
      justifyContent: "flex-end",
    },
  ],
  right: [
    tagsbase,
    {
      justifyContent: "flex-start",
    },
  ],
})

export const tag = styleVariants({
  left: {
    fontFamily: theme.fonts.monospace,
    color: theme.colors.text.dimmed,
    fontSize: theme.fontSize.extraSmall,
    margin: "0 0 8px 10px",
  },
  right: {
    fontFamily: theme.fonts.monospace,
    color: theme.colors.text.dimmed,
    fontSize: theme.fontSize.extraSmall,
    margin: "0 10px 15px 0",
  },
})

export const type = style({
  font: theme.fonts.monospace,
  color: theme.colors.primary,
  fontSize: theme.fontSize.extraSmall,
  marginBottom: theme.space.medium,
})

export const title = style({
  color: theme.colors.text.normal,
  fontSize: theme.fontSize.medium,
  fontWeight: theme.fontWeight.bold,
  margin: 0,
  marginBottom: "1.5rem",
})

export const description = style({
  color: theme.colors.text.dimmed,
  backgroundColor: theme.colors.darkGrey,
  padding: "1.5rem",
  borderRadius: theme.borderRadius,
  lineHeight: "1.3rem",
})
