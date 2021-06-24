import { useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import '../styles/pages/Home.css'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Separator } from '../components/Separator'
import { AsideContent } from '../components/AsideContent'
import { useAuth } from '../hooks/useAuth'

export function Home() {
  const history = useHistory()
  const authentication = useAuth()

  async function handleSignUpWithGoogle() {
    await authentication.signIn()
    // navigateToNewRoom()

    function navigateToNewRoom() {
      history.push('/rooms/new')
    }
  }

  return (
    <div className="homePage">
      <AsideContent />
      <main className="mainContent">
        <div>
          <img
            src={logoImg}
            alt="Letmeask logo"
          />
          <Button onClick={handleSignUpWithGoogle}>
            <span>
              <img
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
