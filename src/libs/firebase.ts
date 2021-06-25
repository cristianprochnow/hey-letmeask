import { firebase, auth, database } from '../services/firebase'
import { error } from '../utils/error'

export async function signInWithGoogle() {
  const authProvider = new firebase.auth.GoogleAuthProvider()

  const { user } = await auth.signInWithPopup(authProvider)

  if (!user)
    error('Invalid user account selected.')

  const { displayName, photoURL, uid } = user as firebase.User

  if (!displayName || !photoURL)
    error('Missing information from Google Account.')

  return {
    name: displayName as string,
    avatar: photoURL as string,
    id: uid
  }
}

export async function getRoomData(roomId: string) {
  const roomPath = `/rooms/${roomId}`
  const roomData = await database
    .ref(roomPath)
    .get()

  return roomData
}

export async function insertNewRoomIntoDatabase(
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
