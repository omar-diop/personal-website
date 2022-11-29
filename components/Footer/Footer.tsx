import * as style from "./footer.css"

export function Footer() {
  return (
    <footer className={style.container}>
      <div>Designed & Built by Omar Diop © {new Date().getFullYear()}</div>
    </footer>
  )
}
