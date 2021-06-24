import { useMemo } from 'react'

import '../styles/components/AsideContent.css'
import illustrationImg from '../assets/images/illustration.svg'

export function AsideContent() {
  function getIllustrationImg(illustrationElement: typeof illustrationImg) {
    return illustrationElement
  }

  const memoizedIllustration = useMemo(() => getIllustrationImg(illustrationImg), [])

  return (
    <aside className="asideContent">
      <img
        src={memoizedIllustration}
        alt="Imagem que ilustra perguntas e respostas"
      />
      <h1>Toda pergunta tem uma resposta.</h1>
      <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
    </aside>
  )
}
