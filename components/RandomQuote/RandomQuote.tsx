import { useState, useEffect, useRef } from "react"
import { loopList } from "../../utils"
import quotes from "../../data/quotes.json"
import * as style from "./randomQuote.css"

export function RandomQuote() {
  const [text, setText] = useState(quotes[0])
  const currentIndex = useRef(0)

  useEffect(() => {
    const loopQuotes = setInterval(() => {
      const nextQuote = loopList(quotes, currentIndex.current, 1)
      currentIndex.current++
      setText(nextQuote)
    }, 5000)

    return () => clearInterval(loopQuotes)
  }, [])
  return (
    <div className={style.terminal}>
      <span className={style.symbol}>{">"}</span>
      <h2 className={style.text}>{text}</h2>
    </div>
  )
}
