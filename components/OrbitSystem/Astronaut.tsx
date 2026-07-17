import { useEffect, useRef, useState, CSSProperties } from "react"
import * as style from "./astronaut.css"

type Flight = {
  id: number
  top: number
  duration: number
  driftY: number
}

const ReactionDuration = 2800

type ReactionKind = "wave" | "bounce"

// Each phrase comes with its own move; past the last one he leaves.
const Reactions: { phrase: string; kind: ReactionKind }[] = [
  { phrase: "> houston, we have a visitor", kind: "wave" },
  { phrase: "> gravity is overrated", kind: "bounce" },
]
const LeavingPhrase = "> ok, ok... I'm going"

export function Astronaut() {
  const [flight, setFlight] = useState<Flight | null>(null)
  const [reaction, setReaction] = useState<ReactionKind | null>(null)
  const [leaving, setLeaving] = useState(false)
  const [clicks, setClicks] = useState(0)
  const [bubble, setBubble] = useState<string | null>(null)
  const firstFlight = useRef(true)

  useEffect(() => {
    if (flight) return
    const delay = firstFlight.current ? 4000 : 45000 + Math.random() * 45000
    const timer = setTimeout(() => {
      firstFlight.current = false
      // Keep the flight in empty space: on desktop the band above the
      // headline, drifting up toward an exit quota still inside the
      // hero; on mobile (where the orbit scene fills the top) the band
      // below the call to action.
      const mobile = window.matchMedia("(max-width: 576px)").matches
      const heroHeight = window.innerHeight * (mobile ? 1 : 1.05)
      const top = mobile ? 68 + Math.random() * 16 : 12 + Math.random() * 14
      const exitTop = mobile
        ? top + (Math.random() - 0.5) * 8
        : 5 + Math.random() * 6
      setClicks(0)
      setFlight({
        id: Date.now(),
        top,
        duration: mobile ? 18 + Math.random() * 10 : 30 + Math.random() * 15,
        driftY: ((exitTop - top) / 100) * heroHeight,
      })
    }, delay)
    return () => clearTimeout(timer)
  }, [flight])

  if (!flight) return null

  const flightStyle: CSSProperties = {
    top: `${flight.top}%`,
    animationDuration: `${flight.duration}s`,
    ["--drift-y" as string]: `${flight.driftY}px`,
  }

  const endFlight = () => {
    setFlight(null)
    setLeaving(false)
    setReaction(null)
    setBubble(null)
  }

  const react = () => {
    if (leaving) return
    const step = Reactions[clicks]
    if (!step) {
      // He has had enough and storms off.
      setReaction(null)
      setBubble(LeavingPhrase)
      setLeaving(true)
      return
    }
    setClicks(clicks + 1)
    setBubble(step.phrase)
    setReaction(step.kind)
    setTimeout(() => setReaction(null), ReactionDuration)
  }

  return (
    <div
      className={`${style.flight} ${
        reaction || leaving ? style.flightPaused : ""
      }`}
      style={flightStyle}
      onClick={react}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) endFlight()
      }}
      aria-hidden="true"
    >
      {bubble && (reaction || leaving) ? (
        <div className={style.bubble}>
          {bubble}
          <span className={style.cursor}>_</span>
        </div>
      ) : null}
      <div
        className={leaving ? style.exitDash : undefined}
        onAnimationEnd={(e) => {
          if (e.target === e.currentTarget) endFlight()
        }}
      >
        <svg
          viewBox="0 0 64 64"
          width="64"
          height="64"
          className={`${style.body} ${
            reaction ? style.bodyReacting[reaction] : ""
          }`}
        >
          <defs>
            <linearGradient id="astro-visor" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#00E3A9" />
              <stop offset="1" stopColor="#0086DE" />
            </linearGradient>
          </defs>
          {/* backpack */}
          <rect x="13" y="21" width="12" height="21" rx="4" fill="#AEB6C0" />
          {/* legs */}
          <rect
            x="25"
            y="44"
            width="7"
            height="15"
            rx="3.5"
            fill="#DDE2E8"
            transform="rotate(10 28.5 51.5)"
          />
          <rect
            x="35"
            y="43"
            width="7"
            height="15"
            rx="3.5"
            fill="#DDE2E8"
            transform="rotate(-14 38.5 50.5)"
          />
          {/* arms: each group is translated onto its shoulder joint */}
          <g transform="translate(23.5 29.5)">
            <g className={style.armLeft}>
              <rect
                x="-3.5"
                y="-2.5"
                width="7"
                height="16"
                rx="3.5"
                fill="#DDE2E8"
              />
              <circle cx="0" cy="13.5" r="3.4" fill="#C4CAD3" />
            </g>
          </g>
          <g transform="translate(40.5 29.5)">
            <g
              className={
                reaction === "wave" ? style.armRightWaving : style.armRight
              }
            >
              <rect
                x="-3.5"
                y="-2.5"
                width="7"
                height="16"
                rx="3.5"
                fill="#DDE2E8"
              />
              <circle cx="0" cy="13.5" r="3.4" fill="#C4CAD3" />
            </g>
          </g>
          {/* torso */}
          <rect x="22" y="25" width="20" height="23" rx="7" fill="#F4F6F8" />
          {/* chest panel */}
          <rect x="27" y="31" width="10" height="7" rx="2" fill="#8E97A3" />
          <circle cx="30" cy="34.5" r="1.4" fill="#00E3A9" />
          <circle cx="34.5" cy="34.5" r="1.4" fill="#FF703B" />
          {/* helmet */}
          <circle cx="32" cy="15" r="11" fill="#F4F6F8" />
          <rect
            x="24.5"
            y="9.5"
            width="15"
            height="10.5"
            rx="5.2"
            fill="#10151B"
          />
          <rect
            x="26.5"
            y="11.5"
            width="6.5"
            height="3.2"
            rx="1.6"
            fill="url(#astro-visor)"
            opacity="0.85"
          />
        </svg>
      </div>
    </div>
  )
}
