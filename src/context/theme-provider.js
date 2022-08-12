import * as React from 'react'
import { ThemeProvider, ThemeContext } from 'styled-components'
import { usePersistedState } from '../utils/usePersistedState'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

// eslint-disable-next-line react/prop-types
function ThemeProv({ children }) {
  const [theme, setTheme] = usePersistedState('test_theme', light)

  const toggleTheme = React.useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme, setTheme])

  return (
    <ThemeProvider theme={{ theme, toggleTheme }}>{children}</ThemeProvider>
  )
}

function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('Use theme have to be used with ThemeProv')
  }
  return context
}

export { ThemeProv, useTheme }
