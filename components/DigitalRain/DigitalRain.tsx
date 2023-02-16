import * as style from "./digitalRain.css"
import { useEffect, useRef } from "react"

interface IDigitalRain {
  speed: number
  duration: number
}

export const DefaultDuration = 4000

export function DigitalRain({ duration = DefaultDuration, speed = 50 }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvas.current) return
    const renderingContext = canvas.current.getContext("2d")

    if (!renderingContext) return

    const width = document.body.offsetWidth
    const height = document.body.offsetHeight
    canvas.current.width = width
    canvas.current.height = height

    renderingContext.fillStyle = "#0C0C0C"
    renderingContext.fillRect(0, 0, width, height)

    const columns = Math.floor(width / 20) + 1
    const yPositions = Array.from({ length: columns }).fill(0) as number[]

    renderingContext.fillStyle = "#0C0C0C"
    renderingContext.fillRect(0, 0, width, height)

    const createDrop = () => {
      renderingContext.fillStyle = "#0001"
      renderingContext.fillRect(0, 0, width, height)

      renderingContext.fillStyle = "#00E3A9"
      renderingContext.font = "16pt monospace"

      yPositions.forEach((y, index) => {
        const letter = String.fromCharCode(Math.random() * 128)

        const x = index * 20
        renderingContext.fillText(letter, x, y)

        if (y > 100 + Math.random() * 10000) {
          yPositions[index] = 0
        } else {
          yPositions[index] = y + 20
        }
      })
    }

    const interval = setInterval(createDrop, speed)

    return () => {
      clearInterval(interval)
    }
  }, [canvas, speed])

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => {
      if (!container.current) return
      container.current.style.opacity = "0"
    }, duration - 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={container} className={style.container}>
      <canvas ref={canvas} />
    </div>
  )
}
