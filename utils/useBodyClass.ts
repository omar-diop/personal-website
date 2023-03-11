import { useEffect } from "react"

const useBodyClass = (className: string) => {
  const addBodyClass = (className: string) =>
    className !== "" && document.body.classList.add(className)
  const removeBodyClass = (className: string) =>
    className !== "" && document.body.classList.remove(className)

  useEffect(() => {
    addBodyClass(className)
    return () => {
      removeBodyClass(className)
    }
  }, [className])
}

export default useBodyClass
