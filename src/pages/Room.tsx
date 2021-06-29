import { useParams } from 'react-router-dom'

import '../styles/pages/Room.css'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import { RoomCodeButton } from '../components/RoomCodeButton'
import { Textarea } from '../components/Textarea'
import { EmptyQuestionsMessage } from '../components/EmptyQuestionsMessage'

type RoomParams = {
  id: string
}

export function Room() {
  const { id: roomId }: RoomParams = useParams()

  return (
    <div className="roomPage">
      <header>
        <div className="content">
          <img src={logoImg} alt="Hey! LetMeAsk logo" />
          <div>
            <RoomCodeButton roomCode={roomId} />
            <Button isOutline>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <h1>Sala React Q&A</h1>

        <form>
          <Textarea
            placeholder="O que você quer perguntar?"
          />
          <div className="formFooter">
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>.
            </span>
            <Button type="submit">
              Enviar pergunta
            </Button>
          </div>
        </form>

        <EmptyQuestionsMessage />
      </main>
    </div>
  )
}
