import { firebase, auth } from '../services/firebase'
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
