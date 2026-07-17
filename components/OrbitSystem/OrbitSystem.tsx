import * as style from "./orbitSystem.css"
import type { OrbitKey } from "./orbitSystem.css"

const verticals: Record<OrbitKey, string> = {
  engineering: "Engineering",
  product: "Product",
  growth: "Growth",
}

export function OrbitSystem() {
  return (
    <div className={style.background}>
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
