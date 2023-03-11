import { useState } from "react"
import * as style from "./sideMenu.css"
import { openedSide } from "../../styles/globals.css"

import Link from "next/link"
// import { CallToAction } from "../CallToAction"

import navigationLinks from "../../data/navigation.json"
import useBodyClass from "../../utils/useBodyClass"

type MenuStatus = boolean

export function SideMenu() {
  const [opened, setOpened] = useState<MenuStatus>(false)

  useBodyClass(opened ? openedSide : "")

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
                  <Link href={data.href}>
                    <span className={style.prefix}>{data.prefix}</span>
                    <span>{data.label}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </aside>
    </>
  )
}
