import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../../styles/theme.css"

const talkCardBase = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.cardBackground,
  borderRadius: theme.borderRadiusLarge,
  padding: `${theme.space.large} ${theme.space.large}`,
  boxShadow: theme.boxShadow,
  transition: theme.transition,
  border: `1px solid ${theme.colors.grey}`,
  ":hover": {
    transform: "translateY(-1px)",
    boxShadow: theme.boxShadow,
    border: `1px solid ${theme.colors.primary}`,
  },
})

export const talkCard = style([
  talkCardBase,
  {
    cursor: "default",
  },
])

export const talkCardLink = style([
  talkCardBase,
  {
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  },
])

export const talkContent = style({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  gap: theme.space.small,
})

export const talkDate = style({
  color: theme.colors.primary,
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.extraSmall,
})

export const talkEvent = style({
  display: "flex",
  alignItems: "center",
  color: theme.colors.text.normal,
  fontWeight: theme.fontWeight.bold,
  fontFamily: theme.fonts.sans,
  fontSize: theme.fontSize.medium,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: theme.fontSize.small,
    },
  },
})

export const talkTitle = style({
  margin: 0,
  color: theme.colors.text.dimmed,
  fontSize: theme.fontSize.small,
  lineHeight: theme.lineHeight.small,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: theme.fontSize.extraSmall,
    },
  },
})

export const talkArrow = style({
  color: theme.colors.text.dimmed,
  fontSize: theme.fontSize.medium,
  marginLeft: theme.space.large,
  flexShrink: 0,
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

export const linkIcon = style({
  marginLeft: theme.space.small,
})
