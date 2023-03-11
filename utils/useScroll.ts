import { useState, useEffect } from "react"

type ScrollDirection = "up" | "down"

const SCROLL_THRESHOLD = 10
const SCROLL_TO_TOP_THRESHOLD = 50

const useScroll = () => {
  const [direction, setScrollDirection] = useState<ScrollDirection>("down")
  const [scrolledToTop, setScrolledToTop] = useState(true)

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    let scrolling = false

    const updateScroll = () => {
      const scrollY = window.pageYOffset
      const currentDirection = scrollY > lastScrollY ? "down" : "up"

      //Animate only if user has scrolled a threshold amount of pixels
      if (Math.abs(scrollY - lastScrollY) < SCROLL_THRESHOLD) {
        scrolling = false
        return
      }

      if (currentDirection !== direction) {
        setScrollDirection(currentDirection)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
      scrolling = false
      setScrolledToTop(scrollY < SCROLL_TO_TOP_THRESHOLD)
    }

    const onScroll = () => {
      if (!scrolling) {
        scrolling = true
        window.requestAnimationFrame(updateScroll)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [direction])

  return { direction, scrolledToTop }
}

export default useScroll
