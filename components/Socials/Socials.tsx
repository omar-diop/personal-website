import * as style from "./socials.css"
import socials from "../../data/socials"

export function Socials() {
  return (
    <div className={style.container}>
      {socials.map(({ title, url, Icon }) => (
        <a
          key={title}
          href={url}
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          <Icon className={style.icon} />
        </a>
      ))}
    </div>
  )
}
