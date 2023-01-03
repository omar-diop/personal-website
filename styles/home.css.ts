import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "./theme.css"

export const section = style({
  margin: "0px auto",
  padding: "100px 0px",
  maxWidth: "1000px",
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

export const aboutContainer = style({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "3fr 2fr",
  gap: "50px",
  lineHeight: theme.lineHeight.small,
  fontSize: theme.fontSize.small,
})

const baseSectionInner = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "300px", //Remove
})

export const sectionInner = styleVariants({
  leftAlign: [
    baseSectionInner,
    {
      alignItems: "flex-start",
    },
  ],
  centerAlign: [
    baseSectionInner,
    {
      alignItems: "center",
    },
  ],
  rightAlign: [
    baseSectionInner,
    {
      alignItems: "flex-end",
    },
  ],
})

export const imageContainer = style({
  position: "relative",
  maxWidth: "270px",
  "::after": {
    border: `2px solid ${theme.colors.primary}`,
    top: `-25px`,
    left: "25px",
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: theme.borderRadius,
    content: "",
  },
})

export const profileImage = style({
  borderRadius: theme.borderRadius,
  objectFit: "cover",
  objectPosition: "center",
  zIndex: 100,
})
