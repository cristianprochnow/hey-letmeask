import { createContext, ReactNode, useState } from 'react'

import { signInWithGoogle } from '../libs/firebase'
import { error as logError } from '../utils/error'

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
