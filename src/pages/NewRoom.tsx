import { useState, FormEvent, ChangeEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'

import '../styles/pages/NewRoom.css'
import logoImg from '../assets/images/logo.svg'
import { database } from '../services/firebase'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { AsideContent } from '../components/AsideContent'
import { useAuth } from '../hooks/useAuth'

export function NewRoom() {
  const history = useHistory()
  const { user } = useAuth()
  const [newRoomName, setNewRoomName] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    resetFormBehavior()

    const isNewRoomNameEmpty = newRoomName.trim() === ''

    if (isNewRoomNameEmpty)
      return

    try {
      const { key: createdRoomId } = await insertNewRoomIntoDatabase(
        newRoomName,
        user?.id as string
      )

      alert('Room created successfully! 🎉')
      navigateToRoom(createdRoomId as string)
    } catch (error) {
      alert('Oh, sorry 😖. An error ocurred at room creation.')
    }

    function resetFormBehavior() {
      event.preventDefault()
    }

    async function insertNewRoomIntoDatabase(
      title: string,
      authorId: string
    ) {
      const databaseDocumentIndexName = 'rooms'

      const roomRef = database.ref(databaseDocumentIndexName)
      const firebaseRoom = await roomRef.push({
        title,
        authorId
      })

      return firebaseRoom
    }

    function navigateToRoom(roomId: string) {
      const roomRoute = `/rooms/${roomId}`

      history.push(roomRoute)
    }
  }

  function handleChangeRoomName(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    setNewRoomName(value)
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

          <strong>Crie uma nova sala</strong>

          <form onSubmit={handleCreateRoom}>
            <Input
              type="text"
              placeholder="Nome da sala"
              value={newRoomName}
              onChange={handleChangeRoomName}
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
