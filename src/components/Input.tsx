import { InputHTMLAttributes } from 'react'

import styles from '../styles/components/Input.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return (
    <input className={styles.input} {...props} />
  )
}
