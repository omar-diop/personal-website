import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "./theme.css"

export const section = style({
  margin: "0px auto",
  padding: "100px 0px",
  maxWidth: "1000px",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "80px 0px",
    },
  },
})

export const heroSection = style({
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  minHeight: "105vh",
  padding: "0px",
  zIndex: 100,
  "@media": {
    "screen and (max-width:576px)": {
      minHeight: "100vh",
    },
  },
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
  "@media": {
    "screen and (max-width: 992px)": {
      fontSize: "3.5rem",
    },
    "screen and (max-width: 768px)": {
      fontSize: "2.8rem",
      marginBottom: theme.space.medium,
    },
  },
})

export const preText = style({
  color: theme.colors.primary,
  fontFamily: theme.fonts.monospace,
  fontWeight: theme.fontWeight.regular,
  fontSize: theme.fontSize.medium,
  margin: 0,
  marginBottom: theme.space.medium,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: theme.fontSize.small,
    },
  },
})

export const aboutContainer = style({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "3fr 2fr",
  gap: "50px",
  lineHeight: theme.lineHeight.small,
  fontSize: theme.fontSize.small,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
})

export const pillText = style({
  fontFamily: theme.fonts.monospace,
  marginBottom: theme.space.medium,
  textAlign: "center",
  "@media": {
    "screen and (max-width: 576px)": {
      fontSize: "0.9rem",
    },
  },
})

export const pillsContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: theme.space.extraLarge,
  marginBottom: theme.space.extraLarge,
})

export const pillsPs = style({
  fontSize: theme.fontSize.extraSmall,
  lineHeight: "1.5rem",
  textAlign: "center",
})

export const pillsLink = style({
  fontSize: theme.fontSize.extraSmall,
  color: theme.colors.primary,
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

const baseImageContainer = style({
  position: "relative",
  maxWidth: "270px",
  boxShadow: theme.boxShadow,
  "::before": {
    borderTop: `2px solid ${theme.colors.primary}`,
    borderLeft: `2px solid ${theme.colors.primary}`,
    borderTopLeftRadius: theme.borderRadius,
    top: `-20px`,
    left: "-20px",
    display: "block",
    position: "absolute",
    width: "50%",
    height: "50%",
    content: "",
  },
  "::after": {
    borderBottom: `2px solid ${theme.colors.primary}`,
    borderRight: `2px solid ${theme.colors.primary}`,
    borderBottomRightRadius: theme.borderRadius,
    bottom: `-20px`,
    right: "-20px",
    display: "block",
    position: "absolute",
    width: "50%",
    height: "50%",
    content: "",
  },
})

export const imageContainer = styleVariants({
  mobile: [
    baseImageContainer,
    {
      display: "none",
      "@media": {
        "screen and (max-width:576px)": {
          height: "300px",
          width: "250px",
          display: "block",
          margin: "0 auto",
        },
      },
    },
  ],
  desktop: [
    baseImageContainer,
    {
      "@media": {
        "screen and (max-width: 768px)": {
          height: "300px",
          width: "300px",
          margin: "0 auto",
        },
        "screen and (max-width:576px)": {
          display: "none",
        },
      },
    },
  ],
})

export const profileImage = style({
  borderRadius: theme.borderRadius,
  objectFit: "cover",
  objectPosition: "center",
  zIndex: 100,
})
