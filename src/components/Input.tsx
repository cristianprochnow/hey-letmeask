import { InputHTMLAttributes } from 'react'

import '../styles/components/Input.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return (
    <input className="input" {...props} />
  )
}
