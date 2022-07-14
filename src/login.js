import * as React from 'react'
import { useAuth } from './context/auth-provider'
import GlobalStyles from './styles/global-styles'
import styled from 'styled-components'

function Login() {
  const { login } = useAuth()

  React.useEffect(() => {
    window.history.pushState({}, '', '/home')
  })

  function handelSubmit(event) {
    event.preventDefault()
    const { user, password } = event.target.elements
    login(user.value, password.value)
  }

  const StyledDiv = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    padding: 10px;
    border-radius: 20px;
    background: #e0ddaa;
  `

  return (
    <>
      <GlobalStyles />

      <StyledDiv>
        <StyledForm id="loginForm" onSubmit={handelSubmit}>
          <label htmlFor="user">Usuario</label>
          <input id="user" />

          <label htmlFor="password">Senha</label>
          <input id="password" type="password" />

          <button id="button-submit" type="submit">
            Submit
          </button>
        </StyledForm>
      </StyledDiv>
    </>
  )
}

export { Login }
