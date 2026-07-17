import { useEffect, useState } from "react"
import * as style from "./orbitSystem.css"
import type { OrbitKey } from "./orbitSystem.css"
import { Astronaut } from "./Astronaut"

const verticals: Record<OrbitKey, string> = {
  engineering: "Engineering",
  product: "Product",
  growth: "Growth",
}

// Clicking the core collapses the system into Gargantua, then it all
// springs back: idle -> collapsing -> blackhole -> reborn -> idle.
type Phase = "idle" | "collapsing" | "blackhole" | "reborn"

const PhaseDuration: Record<Exclude<Phase, "idle">, number> = {
  collapsing: 2000,
  blackhole: 7000,
  reborn: 2000,
}

const NextPhase: Record<Exclude<Phase, "idle">, Phase> = {
  collapsing: "blackhole",
  blackhole: "reborn",
  reborn: "idle",
}

export function OrbitSystem() {
  const [phase, setPhase] = useState<Phase>("idle")

  useEffect(() => {
    if (phase === "idle") return
    const timer = setTimeout(
      () => setPhase(NextPhase[phase]),
      PhaseDuration[phase]
    )
    return () => clearTimeout(timer)
  }, [phase])

  const collapsed = phase === "collapsing" || phase === "blackhole"

  const collapse = () => {
    if (phase !== "idle") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setPhase("collapsing")
  }

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
          <div
            className={`${style.sunGlow} ${
              collapsed ? style.sunGlowHidden : ""
            }`}
          />
          <div
            className={`${style.sun} ${collapsed ? style.sunCollapsed : ""}`}
            onClick={collapse}
          />
          {(Object.keys(verticals) as OrbitKey[]).map((key) => (
            <div
              key={key}
              className={`${style.orbitShell[key]} ${
                collapsed ? style.shellCollapsed : ""
              }`}
            >
              <div className={style.orbit[key]}>
                <span className={style.trail[key]} />
                <div className={style.planetAnchor}>
                  <div className={style.planet[key]}>
                    <span className={style.depth[key]}>
                      <span className={style.dot[key]} />
                      <span className={style.label[key]}>
                        {verticals[key]}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${style.gargantua} ${
            phase === "blackhole" ? style.gargantuaOn : ""
          }`}
        >
          <div className={style.bhHalo} />
          <div className={style.bhHorizon} />
          <div className={style.bhDisk} />
        </div>
        {phase === "reborn" ? <div className={style.flash} /> : null}
        {phase === "blackhole" || phase === "reborn" ? (
          <div
            className={
              style.statusText[
                phase === "blackhole" ? "singularity" : "reborn"
              ]
            }
          >
            {phase === "blackhole"
              ? "> singularity detected"
              : "> welcome back"}
            <span className={style.blinkCursor}>_</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
