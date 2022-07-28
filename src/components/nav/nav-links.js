import * as React from 'react'
import { useAuth } from '../../context/auth-provider'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Ul } from './styles'

// eslint-disable-next-line react/prop-types
function NavLinks({ open }) {
  const { logout } = useAuth()

  return (
    <Ul open={open}>
      <li>
        <StylesNavLink to="/home">Home</StylesNavLink>
      </li>
      <li>
        <StylesNavLink to="/teste">Test</StylesNavLink>
      </li>
      <li>
        <StylesNavLink to="/page">Page</StylesNavLink>
      </li>
      <li>
        <Button onClick={logout}>Logout</Button>
      </li>
    </Ul>
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export default NavLinks
