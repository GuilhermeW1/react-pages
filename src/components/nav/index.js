import * as React from 'react'
import { useAuth } from '../../context/auth-provider'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../../context/theme-provider'
import { Button, Ul, Container, Span, DivTheme } from './styles'
import Switch from 'react-switch'
import SearchBar from '../searchBar'

function NavBar() {
  const { logout } = useAuth()
  const { toggleTheme, theme } = useTheme()

  return (
    <nav>
      <Ul>
        <li style={{ marginRight: '10px' }}>
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
        </li>
        <li>
          <StylesNavLink to="/home">Home</StylesNavLink>
        </li>
        <li>
          <StylesNavLink to="/teste">Test-Page</StylesNavLink>
        </li>
        <li>
          <StylesNavLink to="/page">Page</StylesNavLink>
        </li>
        <li>
          <Button onClick={logout}>Logout</Button>
        </li>
      </Ul>
    </nav>
  )
}

function NavLink(props) {
  return <Link {...props} />
}
const StylesNavLink = styled(NavLink)`
  color: ${props => props.theme.theme.colors.text};
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
  font-weight: 600;
`

function Nav() {
  return (
    <header>
      <Container>
        <h1 style={{ color: '#E0DDAA' }}>Logo</h1>
        <SearchBar />
        <NavBar />
      </Container>
    </header>
  )
}

export { Nav }
