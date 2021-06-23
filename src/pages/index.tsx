import Head from 'next/head'
import Image from 'next/image'
import { FiLogIn } from 'react-icons/fi'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Início | Hey! LetMeAsk</title>
      </Head>
      <aside className={styles.asideContent}>
        <Image
          src={illustrationImg}
          alt="Imagem que ilustra perguntas e respostas"
        />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
      </aside>
      <main className={styles.mainContent}>
        <div>
          <Image
            src={logoImg}
            alt="Letmeask logo"
          />
          <Button>
            <span>
              <Image
                src={googleIconImg}
                alt="Google icon"
              />
            </span>
            Crie sua conta com o Google
          </Button>
          <div className={styles.separator}>
            ou entre em uma sala
          </div>
          <form>
            <Input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button>
              <FiLogIn
                size={20}
              />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
