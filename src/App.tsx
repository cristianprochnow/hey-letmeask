import './styles/global.css'
import { Routes } from './routes'
import { AuthProvider } from './contexts/Auth'

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
