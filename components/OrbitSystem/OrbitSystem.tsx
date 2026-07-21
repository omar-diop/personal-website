import { useEffect, useRef, useState } from "react"
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
  const rootRef = useRef<HTMLDivElement>(null)
  const [offscreen, setOffscreen] = useState(false)

  // Pause every animation while the hero is scrolled out of view, so
  // the compositor isn't kept busy by a scene nobody can see.
  useEffect(() => {
    const node = rootRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      setOffscreen(!entry.isIntersecting)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (phase === "idle") return
    const timer = setTimeout(
      () => setPhase(NextPhase[phase]),
      PhaseDuration[phase],
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
    <div
      ref={rootRef}
      className={`${style.background} ${
        offscreen ? style.offscreenPaused : ""
      }`}
    >
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
                      <span className={style.label[key]}>{verticals[key]}</span>
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
          <div className={style.bhVignette} />
          <div className={style.bhHorizon} />
          <div className={style.bhLens} />
          <div className={style.bhPhotonRing} />
          <div className={style.bhDiskGlow} />
          <div className={style.bhDisk} />
        </div>
        {phase === "reborn" ? <div className={style.flash} /> : null}
        {phase === "blackhole" ? (
          <div className={style.statusText}>
            {"> oops, a singularity happened"}
            <span className={style.blinkCursor}>_</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
