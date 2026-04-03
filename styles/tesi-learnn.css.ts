import { style, globalStyle } from "@vanilla-extract/css"
import { theme } from "./theme.css"

export const header = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto",
  padding: "120px 0 80px",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "80px 0 60px",
    },
  },
})

export const title = style({
  color: theme.colors.text.normal,
  fontWeight: theme.fontWeight.bold,
  fontSize: "2.5rem",
  lineHeight: "3rem",
  margin: 0,
  marginBottom: "0.15rem",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1.8rem",
      lineHeight: "2.3rem",
    },
  },
})

export const subtitle = style({
  fontFamily: theme.fonts.monospace,
  color: theme.colors.primary,
  fontSize: theme.fontSize.medium,
  fontWeight: theme.fontWeight.regular,
  margin: 0,
  marginBottom: theme.space.extraLarge,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: theme.fontSize.small,
    },
  },
})

export const description = style({
  color: theme.colors.text.dimmed,
  fontSize: theme.fontSize.small,
  lineHeight: theme.lineHeight.medium,
  maxWidth: "650px",
  margin: 0,
  marginBottom: theme.space.extraLarge,
})

export const ctaContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.space.large,
})

export const secondaryCta = style({
  fontSize: theme.fontSize.extraSmall,
  color: theme.colors.text.dimmed,
  lineHeight: theme.lineHeight.small,
  textAlign: "center",
})

globalStyle(`${secondaryCta} a`, {
  color: theme.colors.primary,
  transition: theme.transition,
})

globalStyle(`${secondaryCta} a:hover`, {
  textDecoration: "underline",
})

export const section = style({
  maxWidth: "900px",
  margin: "0 auto",
  padding: "60px 0",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "40px 0",
    },
  },
})

export const indexGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.space.large,
  marginTop: theme.space.extraLarge,
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
})

export const indexCard = style({
  background: theme.colors.cardBackground,
  borderRadius: theme.borderRadiusLarge,
  padding: theme.space.extraLarge,
  border: `1px solid ${theme.colors.darkGrey}`,
  transition: theme.transition,
  ":hover": {
    borderColor: theme.colors.grey,
  },
})

export const indexCardTitle = style({
  fontFamily: theme.fonts.monospace,
  color: theme.colors.primary,
  fontSize: theme.fontSize.extraSmall,
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  margin: 0,
  marginBottom: theme.space.large,
})

export const indexCardItem = style({
  marginBottom: theme.space.medium,
  selectors: {
    "&:last-child": {
      marginBottom: 0,
    },
  },
})

export const indexCardChapter = style({
  fontFamily: theme.fonts.monospace,
  color: theme.colors.text.normal,
  fontSize: theme.fontSize.extraSmall,
  fontWeight: theme.fontWeight.semiBold,
})

export const indexCardDesc = style({
  color: theme.colors.text.dimmed,
  fontSize: theme.fontSize.extraSmall,
  lineHeight: theme.lineHeight.small,
  marginTop: theme.space.extraSmall,
})

export const footerSection = style({
  maxWidth: "700px",
  margin: "0 auto",
  padding: "60px 0 100px",
  textAlign: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "40px 0 80px",
    },
  },
})

export const footerText = style({
  color: theme.colors.text.dimmed,
  fontSize: theme.fontSize.small,
  lineHeight: theme.lineHeight.medium,
  marginBottom: theme.space.extraLarge,
})

export const newsletterLink = style({
  fontFamily: theme.fonts.monospace,
  color: theme.colors.primary,
  fontSize: theme.fontSize.small,
  transition: theme.transition,
  ":hover": {
    textDecoration: "underline",
  },
})
