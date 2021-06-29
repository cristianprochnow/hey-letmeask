import { FiCopy } from 'react-icons/fi'

import '../styles/pages/Room.css'
import logoImg from '../assets/images/logo.svg'
import emptyQuestionsImg from '../assets/images/empty-questions.svg'
import { Button } from '../components/Button'

export function Room() {
  return (
    <div className="roomPage">
      <header>
        <div className="content">
          <img src={logoImg} alt="Hey! LetMeAsk logo" />
          <div>
            <button>
              <FiCopy size={20} color="#FFF" />
              <span>
                Sala #-Md2Sddgo8KuWinzBwa8
              </span>
            </button>
            <Button>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <h1>Sala React Q&A</h1>

        <form>
          <textarea
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
