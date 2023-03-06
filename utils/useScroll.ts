import { useState, useEffect } from "react"

type ScrollDirection = "up" | "down"

const useScroll = () => {
  const [direction, setScrollDirection] = useState<ScrollDirection>("down")
  const [scrolledToTop, setScrolledToTop] = useState(true)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const onScroll = () => {
      const scrollY = window.pageYOffset
      const currentDirection = scrollY > lastScrollY ? "down" : "up"
      if (currentDirection !== direction) {
        setScrollDirection(currentDirection)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
      setScrolledToTop(scrollY < 50)
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [direction])

  return { direction, scrolledToTop }
}

export default useScroll
