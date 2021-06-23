import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FiLogIn } from 'react-icons/fi'

import styles from '../styles/pages/Home.module.css'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Separator } from '../components/Separator'
import { AsideContent } from '../components/AsideContent'

export default function Home() {
  const router = useRouter()

  function handleSignUpWithGoogle() {
    navigateToNewRoom()

    function navigateToNewRoom() {
      router.push('/rooms/new')
    }
  }

  return (
    <div className={styles.homePage}>
      <Head>
        <title>Início | Hey! LetMeAsk</title>
      </Head>
      <AsideContent />
      <main className={styles.mainContent}>
        <div>
          <Image
            src={logoImg}
            alt="Letmeask logo"
          />
          <Button onClick={handleSignUpWithGoogle}>
            <span>
              <Image
                src={googleIconImg}
                alt="Google icon"
              />
            </span>
            Crie sua conta com o Google
          </Button>
          <Separator title="ou entre em uma sala" />
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
