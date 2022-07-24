import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth-provider'
import { ThemeProv } from './theme-provider'
import { ListProvider } from './list'

// eslint-disable-next-line react/prop-types
function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProv>
        <ListProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </ListProvider>
      </ThemeProv>
    </AuthProvider>
  )
}

export { AppProviders }
