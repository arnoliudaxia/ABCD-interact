import { useState } from 'react'

const LETTERS = ['A', 'B', 'C', 'D'] as const

export default function Home() {
  const [active, setActive] = useState<Set<string>>(new Set())

  const toggle = (letter: string) => {
    setActive((prev) => {
      const next = new Set(prev)
      if (next.has(letter)) next.delete(letter)
      else next.add(letter)
      return next
    })
  }

  return (
    <main className="grid min-h-dvh grid-cols-2 grid-rows-2 gap-2 bg-[#EEF0F2] p-2">
      {LETTERS.map((letter) => {
        const isOn = active.has(letter)
        return (
          <button
            key={letter}
            onClick={() => toggle(letter)}
            aria-pressed={isOn}
            className={[
              'flex items-center justify-center rounded-2xl select-none',
              'text-[clamp(4rem,18vmin,14rem)] font-semibold leading-none',
              'transition-colors duration-200 ease-out active:scale-[0.98] transition-transform',
              'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#005d71]/50 focus-visible:ring-inset',
              isOn
                ? 'bg-[#005d71] text-white'
                : 'bg-[#dbdbdb] text-[#313131] hover:bg-[#cfcfcf]',
            ].join(' ')}
          >
            {letter}
          </button>
        )
      })}
    </main>
  )
}
