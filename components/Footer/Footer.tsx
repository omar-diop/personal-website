import * as style from "./footer.css"
import { Socials } from "../Socials"

export function Footer() {
  return (
    <footer className={style.container}>
      <Socials viewport="mobile" />
      <div>Designed & Built by Omar Diop © {new Date().getFullYear()}</div>
    </footer>
  )
}
