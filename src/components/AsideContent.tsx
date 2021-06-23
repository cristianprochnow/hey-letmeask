import { useMemo } from 'react'
import Image from 'next/image'

import styles from '../styles/components/AsideContent.module.css'
import illustrationImg from '../assets/images/illustration.svg'

export function AsideContent() {
  function getIllustrationImg(illustrationElement: typeof illustrationImg) {
    return illustrationElement
  }

  const memoizedIllustration = useMemo(() => getIllustrationImg(illustrationImg), [])

  return (
    <aside className={styles.asideContent}>
      <Image
        src={memoizedIllustration}
        alt="Imagem que ilustra perguntas e respostas"
      />
      <h1>Toda pergunta tem uma resposta.</h1>
      <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
    </aside>
  )
}
