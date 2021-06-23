import Image from 'next/image'

import styles from '../styles/components/AsideContent.module.css'
import illustrationImg from '../assets/images/illustration.svg'

export function AsideContent() {
  return (
    <aside className={styles.asideContent}>
      <Image
        src={illustrationImg}
        alt="Imagem que ilustra perguntas e respostas"
      />
      <h1>Toda pergunta tem uma resposta.</h1>
      <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
    </aside>
  )
}
