import * as React from 'react'
//import PropTypes from 'prop-types'

const AuthContext = React.createContext({})

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null)

  const localStorageKey = 'test_project'

  function login(user, password) {
    const userObj = { user: user, password: password }
    window.localStorage.setItem(localStorageKey, JSON.stringify(userObj))
    setUser(user)
  }

  const logout = React.useCallback(() => {
    window.localStorage.removeItem(localStorageKey)
    setUser(null)
  }, [])

  React.useEffect(() => {
    const user = window.localStorage.getItem(localStorageKey)
    if (user) {
      const userObj = JSON.parse(user)
      setUser(userObj.user)
    }
    return
  }, [])

  return (
    <AuthContext.Provider value={{ logout, login, user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('Tem parada errada ai')
  }
  return context
}

export { AuthProvider, useAuth, AuthContext }
