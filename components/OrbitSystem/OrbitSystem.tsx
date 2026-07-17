import * as style from "./orbitSystem.css"
import type { OrbitKey } from "./orbitSystem.css"
import { Astronaut } from "./Astronaut"

const verticals: Record<OrbitKey, string> = {
  engineering: "Engineering",
  product: "Product",
  growth: "Growth",
}

export function OrbitSystem() {
  return (
    <div className={style.background}>
      <div className={style.spaceLayer}>
        <span className={style.stars.far} />
        <span className={style.stars.mid} />
        <span className={style.stars.near} />
        <span className={style.morseStar} />
        <span className={style.shootingStar} />
        <Astronaut />
      </div>
      <div className={style.scene}>
        <div className={style.system}>
          <div className={style.sunGlow} />
          <div className={style.sun} />
          {(Object.keys(verticals) as OrbitKey[]).map((key) => (
            <div key={key} className={style.orbit[key]}>
              <span className={style.trail[key]} />
              <div className={style.planetAnchor}>
                <div className={style.planet[key]}>
                  <span className={style.depth[key]}>
                    <span className={style.dot[key]} />
                    <span className={style.label[key]}>{verticals[key]}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
