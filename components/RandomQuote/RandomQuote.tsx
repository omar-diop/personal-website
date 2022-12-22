import { useState, useEffect } from "react"
import { getRandomQuote } from "../../utils"
import quotes from "../../data/quotes.json"
import * as style from "./randomQuote.css"

export function RandomQuote() {
  const [text, setText] = useState(quotes.first)

  useEffect(() => {
    const loopQuotes = setInterval(() => {
      const randomQuote = getRandomQuote(quotes.loop)
      setText(randomQuote)
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
