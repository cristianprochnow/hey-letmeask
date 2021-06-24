import { createContext, ReactNode, useState } from 'react'

import { auth, firebase } from '../services/firebase'

type User = {
  name: string
}

type AuthContextType = {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
}
export const AuthContext = createContext({} as AuthContextType)

type AuthProviderProps = {
  children: ReactNode
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  async function signInWithGoogle() {
    const authProvider = new firebase.auth.GoogleAuthProvider()

    try {
      const authResponse = await auth.signInWithPopup(authProvider)

      console.log(authResponse)
    } catch (error) {
      throw new Error('An error ocurred at signin, please try again later.')
    }
  }

  return (
    <AuthContext.Provider value={{ signInWithGoogle, user }}>
      {children}
    </AuthContext.Provider>
  )
}
