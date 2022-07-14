import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth-provider'
import { ThemeProv } from './theme-provider'

// eslint-disable-next-line react/prop-types
function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProv>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProv>
    </AuthProvider>
  )
}

export { AppProviders }
