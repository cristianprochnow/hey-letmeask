import '../styles/components/Separator.css'

type SeparatorProps = {
  title: string
}

export function Separator({ title }: SeparatorProps) {
  return (
    <span className="separator">
      {title}
    </span>
  )
}
