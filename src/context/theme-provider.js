import * as React from 'react'
import { ThemeProvider, ThemeContext } from 'styled-components'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

// eslint-disable-next-line react/prop-types
function ThemeProv({ children }) {
  const [theme, setTheme] = React.useState(light)

  const toggleTheme = React.useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  })

  return (
    <ThemeProvider theme={{ theme, toggleTheme }}>{children}</ThemeProvider>
  )
}

function useTheme() {
  const context = React.useContext(ThemeContext)
  return context
}

export { ThemeProv, useTheme }
