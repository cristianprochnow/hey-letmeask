import { Link } from 'react-router-dom'

import '../styles/pages/NewRoom.css'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { AsideContent } from '../components/AsideContent'

export function NewRoom() {
  return (
    <div className="homePage">
      <AsideContent />
      <main className="mainContent">
        <div>
          <img
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
            <Link to="/">Clique aqui</Link>
          </span>
        </div>
      </main>
    </div>
  )
}
