import { createContext, ReactNode, useEffect, useState } from 'react'

import { signInWithGoogle } from '../libs/firebase'
import { auth, firebase } from '../services/firebase'
import { error, error as logError } from '../utils/error'

type User = {
  id: string
  name: string
  avatar: string
}
type AuthContextType = {
  user: User | null
  isLoggedIn: boolean
  signIn: () => Promise<void>
}
type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  async function signIn() {
    try {
      const { name, avatar, id } = await signInWithGoogle()

      setUser({
        id,
        name,
        avatar
      })
    } catch (error) {
      logError(error)
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const {
          displayName,
          photoURL,
          uid
        } = user as firebase.User

        if (!displayName || !photoURL)
          error('Missing information from Google Account.')

        setUser({
          id: uid,
          name: displayName as string,
          avatar: photoURL as string
        })
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      user,
      isLoggedIn: !!user
    }}>
      {children}
    </AuthContext.Provider>
  )
}
