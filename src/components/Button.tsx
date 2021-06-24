import { ButtonHTMLAttributes } from 'react'

import '../styles/components/Button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="button"
      {...props}
    >
      {children}
    </button>
  )
}
