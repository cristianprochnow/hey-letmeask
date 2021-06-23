import Head from 'next/head'
import Image from 'next/image'
import { FiLogIn } from 'react-icons/fi'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Início | Hey! LetMeAsk</title>
      </Head>
      <aside className={styles.asideContent}>
        <Image
          src="/images/illustration.svg"
          alt="Imagem que ilustra perguntas e respostas"
          width="100%"
          height="100%"
        />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main className={styles.mainContent}>
        <div>
          <Image
            src="/images/logo.svg"
            alt="Letmeask logo"
            width="100%"
            height="100%"
          />
          <button>
            <Image
              src="/images/google-icon.svg"
              alt="Google icon"
              width="100%"
              height="100%"
            />
            Crie sua conta com o Google
          </button>
          <div className={styles.separator}>
            ou entre em uma sala
          </div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <button>
              <FiLogIn
                size={20}
              />
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
