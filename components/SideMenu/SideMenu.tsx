import { useState } from "react"
import * as style from "./sideMenu.css"
import { openedSide } from "../../styles/globals.css"

import { CallToAction } from "../CallToAction"

import navigationLinks from "../../data/navigation.json"
import useBodyClass from "../../utils/useBodyClass"
import { useRouter } from "next/router"

type MenuStatus = boolean

export function SideMenu() {
  const [opened, setOpened] = useState<MenuStatus>(false)
  const router = useRouter()
  useBodyClass(opened ? openedSide : "")

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault()
    setOpened(false)
    router.push(href)
  }

  return (
    <>
      <button
        className={style.hamburgerButton}
        onClick={() => setOpened(!opened)}
      >
        <div className={style.middleLine[opened ? "opened" : "closed"]} />
      </button>
      <aside className={style.menu[opened ? "opened" : "closed"]}>
        <nav className={style.nav}>
          <div className={style.links}>
            <ol className={style.list}>
              {navigationLinks.map((data) => (
                <li className={style.link} key={data.label}>
                  <a
                    onClick={(e) => handleLinkClick(e, data.href)}
                    href={data.href}
                  >
                    <span className={style.prefix}>{data.prefix}</span>
                    <span>{data.label}</span>
                  </a>
                </li>
              ))}
            </ol>
            <CallToAction
              text={"Contact me"}
              link="mailto:info@omardiop.com"
              type="primary_small"
              mode="link"
            />
          </div>
        </nav>
      </aside>
    </>
  )
}
