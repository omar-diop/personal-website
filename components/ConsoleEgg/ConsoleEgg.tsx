import { useEffect } from "react"

// Module-level flag so StrictMode's double effect doesn't print twice.
let printed = false

const tars = `
┌──┐┌──┐┌──┐┌──┐
│  ││ ●││  ││  │
│  ││  ││  ││  │
│  ││  ││  ││  │
│  ││  ││  ││  │
└──┘└──┘└──┘└──┘
      TARS`

const mono = "font-family:'Roboto Mono',monospace;"

export function ConsoleEgg() {
  useEffect(() => {
    if (printed) return
    printed = true
    console.log(
      "%cDo not go gentle into that good night.",
      `${mono}color:#00E3A9;font-size:14px;font-weight:bold`
    )
    console.log(
      "%cRage, rage against the dying of the light.",
      `${mono}color:#A9A9A9;font-size:12px`
    )
    console.log(
      `%c${tars}`,
      `${mono}color:#56A1FF;font-size:12px;line-height:1.15`
    )
    console.log("%c> humor setting: 75%", `${mono}color:#A9A9A9;font-size:12px`)
    console.log(
      "%c> curious about how this site works? https://github.com/omar-diop",
      `${mono}color:#00E3A9;font-size:12px`
    )
    console.log(
      "%c> or just say hi: info@omardiop.com",
      `${mono}color:#00E3A9;font-size:12px`
    )
  }, [])

  return null
}
