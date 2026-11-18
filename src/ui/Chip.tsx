import type { ReactNode } from 'react'

interface Props {
  selected: boolean
  onClick: () => void
  children: ReactNode
}

// Design-system toggle chip, for filters and quick choices.
export function Chip({ selected, onClick, children }: Props) {
  return (
    <button type="button" className="chip" aria-pressed={selected} onClick={onClick}>
      {children}
    </button>
  )
}
