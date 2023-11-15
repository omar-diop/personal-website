export const loopList = (
  quotes: string[],
  currentIndex: number,
  startIndex: number
) => {
  const nextIndex = (currentIndex + startIndex) % quotes.length
  return quotes[nextIndex]
}
