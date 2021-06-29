import { ButtonHTMLAttributes } from 'react'

import '../styles/components/Button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutline?: boolean
}

export function Button({
  isOutline = false,
  children,
  ...props }: ButtonProps) {
  return (
    <button
      className={`button ${isOutline ? 'outline' : 'solid'}`}
      {...props}
    >
      {children}
    </button>
  )
}
