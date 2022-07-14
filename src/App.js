import * as React from 'react'
import { Login } from './login'
import { Authenticated } from './authenticated'
import { useAuth } from './context/auth-provider'

function App() {
  const { user } = useAuth()
  return user ? <Authenticated /> : <Login />
}

export default App
