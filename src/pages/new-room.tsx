import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/pages/NewRoom.module.css'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { AsideContent } from '../components/AsideContent'

export default function NewRoom() {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Criar sala | Hey! LetMeAsk</title>
      </Head>
      <AsideContent />
      <main className={styles.mainContent}>
        <div>
          <Image
            src={logoImg}
            alt="Letmeask logo"
          />

          <strong>Crie uma nova sala</strong>

          <form>
            <Input
              type="text"
              placeholder="Nome da sala"
            />
            <Button>
              Criar sala
            </Button>
          </form>

          <span>
            Quer entrar em uma sala já existente?
            <Link href="/">Clique aqui</Link>
          </span>
        </div>
      </main>
    </div>
  )
}
