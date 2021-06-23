type SeparatorProps = {
  title: string
}

import styles from '../styles/components/Separator.module.css'

export function Separator({ title }: SeparatorProps) {
  return (
    <span className={styles.separator}>
      {title}
    </span>
  )
}
