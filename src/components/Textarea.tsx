import { TextareaHTMLAttributes } from 'react'

import '../styles/components/Textarea.css'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea className="textarea" {...props} />
  )
}
