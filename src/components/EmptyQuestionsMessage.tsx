import '../styles/components/EmptyQuestionsMessage.css'
import emptyQuestionsImg from '../assets/images/empty-questions.svg'

export function EmptyQuestionsMessage() {
  return (
    <span className="emptyQuestionsMessage">
      <img
        src={emptyQuestionsImg}
        alt="There's no questions available"
      />

      <strong>Nenhuma pergunta por aqui...</strong>
      <p>Faça o seu login e seja a primeira pessoa a fazer uma pergunta!</p>
    </span>
  )
}
