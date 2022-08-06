import * as React from 'react'
//import NavLinks from './nav-links'
import Burger from './burger'
import { useTheme } from '../../context/theme-provider'
import { NavB, Span, DivTheme } from './styles'
import Switch from 'react-switch'
import SearchBar from '../searchBar'

function Nav() {
  const { toggleTheme, theme } = useTheme()
  return (
    <header>
      <NavB>
        <h1 style={{ color: '#E0DDAA' }}>Logo</h1>
        <SearchBar />
        <DivTheme>
          <Span>Theme</Span>
          <Switch
            onChange={toggleTheme}
            checked={theme.title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            offHandleColor={'#000'}
            offColor={'#f0f0f0'}
            onColor={'#000'}
            height={20}
            width={40}
          />
        </DivTheme>
        <Burger />
      </NavB>
    </header>
  )
}

export { Nav }
