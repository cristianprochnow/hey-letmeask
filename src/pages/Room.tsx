import { useParams } from 'react-router-dom'

import '../styles/pages/Room.css'
import logoImg from '../assets/images/logo.svg'
import emptyQuestionsImg from '../assets/images/empty-questions.svg'
import { Button } from '../components/Button'
import { RoomCodeButton } from '../components/RoomCodeButton'
import { Textarea } from '../components/Textarea'

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

        <span className="emptyQuestionsAdvisor">
          <img
            src={emptyQuestionsImg}
            alt="There's no questions available"
          />

          <strong>Nenhuma pergunta por aqui...</strong>
          <p>Faça o seu login e seja a primeira pessoa a fazer uma pergunta!</p>
        </span>
      </main>
    </div>
  )
}
