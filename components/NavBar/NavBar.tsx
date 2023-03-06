import * as style from "./navBar.css"
import Link from "next/link"
import navigationLinks from "../../data/navigation.json"
import { CallToAction } from "../CallToAction"
import useScroll from "../../utils/useScroll"

const Logo = () => (
  <div className={style.logo}>
    <Link href="/">
      <h1>Omar Diop</h1>
    </Link>
  </div>
)

export function NavBar() {
  const { direction, scrolledToTop } = useScroll()

  return (
    <header
      className={scrolledToTop ? style.header["top"] : style.header[direction]}
    >
      <nav className={style.nav}>
        <Logo />
        <div className={style.links}>
          <ol className={style.list}>
            {navigationLinks.map((data) => (
              <li className={style.link} key={data.label}>
                <Link href={data.href}>
                  <span className={style.prefix}>{data.prefix}</span>
                  <span>{data.label}</span>
                </Link>
              </li>
            ))}
          </ol>
          <CallToAction
            text={"Contatti"}
            link="mailto:info@omardiop.com"
            type="primary_big"
            mode="link"
          />
        </div>
      </nav>
    </header>
  )
}
