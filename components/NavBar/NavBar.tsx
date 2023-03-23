import * as style from "./navBar.css"

import navigationLinks from "../../data/navigation.json"

import { CallToAction } from "../CallToAction"
import { SideMenu } from "../SideMenu"
import Link from "next/link"
import Image from "next/image"

import useScroll from "../../utils/useScroll"

const Logo = () => (
  <Link href="/">
    <div className={style.logo}>
      <Image
        src="/images/logo.png"
        alt="Omar Diop, Logo"
        fill={true}
        style={{ objectFit: "contain" }}
      />
    </div>
  </Link>
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
            type="primary_small"
            mode="link"
          />
        </div>
      </nav>
      <SideMenu />
    </header>
  )
}
