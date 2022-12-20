import * as style from "./callToAction.css"

interface ICallToAction {
  link: string
  text: string
  size?: "small" | "big"
}

export function CallToAction({ link, text, size = "big" }: ICallToAction) {
  return (
    <a className={style.button[size]} href={link}>
      {text}
    </a>
  )
}
