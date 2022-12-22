export const getRandomQuote = (quotes: string[]) => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
