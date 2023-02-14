import * as styles from "./callToAction.css"

interface ICallToAction {
  link: string
  text: string
  type?: "primary_big" | "primary_small" | "red_big" | "blue_big"
  style?: React.CSSProperties
}

export function CallToAction({
  link,
  text,
  type = "primary_big",
  style,
}: ICallToAction) {
  return (
    <a className={styles.button[type]} href={link} style={style}>
      {text}
    </a>
  )
}
