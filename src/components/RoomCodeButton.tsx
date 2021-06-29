import { FiCopy } from 'react-icons/fi'

import '../styles/components/RoomCodeButton.css'

type RoomCodeButtonProps = {
  roomCode: string
}

export function RoomCodeButton({ roomCode }: RoomCodeButtonProps) {
  function handleCopyRoomCodeToClipboard() {
    navigator.clipboard.writeText(roomCode)
  }

  return (
    <button
      className="roomCodeButton"
      onClick={handleCopyRoomCodeToClipboard}
    >
      <FiCopy size={20} color="#FFF" />
      <span>
        Sala #{roomCode}
      </span>
    </button>
  )
}
