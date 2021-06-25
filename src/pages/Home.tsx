import { useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import { ChangeEvent, FormEvent, useState } from 'react'

import '../styles/pages/Home.css'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Separator } from '../components/Separator'
import { AsideContent } from '../components/AsideContent'
import { useAuth } from '../hooks/useAuth'
import { getRoomData } from '../libs/firebase'

export function Home() {
  const history = useHistory()
  const [roomCode, setRoomCode] = useState('')
  const { isLoggedIn, signIn } = useAuth()

  async function handleSignUpWithGoogle() {
    try {
      if (!isLoggedIn)
        await signIn()

      navigateToNewRoom()
    } catch (error) {
      alert('Ooops... An error ocurred while signing up you account. Please, try again later. 😥')
    }

    function navigateToNewRoom() {
      history.push('/rooms/new')
    }
  }

  async function handleJoinRoom(event: FormEvent) {
    resetFormBehavior()

    const isRoomCodeEmpty = roomCode.trim() === ''

    if (isRoomCodeEmpty) return

    const roomRef = await getRoomData(roomCode)

    if (!roomRef.exists()) {
      alert('Ooops, this room does not exists. 😅')

      return
    }

    navigateToRoom(roomCode)

    function resetFormBehavior() {
      event.preventDefault()
    }

    function navigateToRoom(roomId: string) {
      const roomRoute = `/rooms/${roomId}`

      history.push(roomRoute)
    }
  }

  function handleChangeRoomCode(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    setRoomCode(value)
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
          <form onSubmit={handleJoinRoom}>
            <Input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={handleChangeRoomCode}
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
