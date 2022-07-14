import * as React from 'react'
import { useAuth } from './context/auth-provider'
import styled from 'styled-components'
import './styles/login-styles.css'

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledForm = styled.form`
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 7px 13px -7px #000000;
  padding: 10px;
  border-radius: 10px;
  background: #fff;
`

const Button = styled.button`
  padding: 5px;
  font-size: 1em;
  text-color: #030303;
  border-radius: 5px;
  border: none;
  box-shadow: 3px 3px 13px -7px #000000;
`

const Input = styled.input`
  border: none;
  background: #cddcf5;
  padding: 10px;
  border-radius: 5px;
`

const Label = styled.label`
  font-size: 1em;
  font-weight: 500;
`

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

  return (
    <>
      <Div>
        <StyledForm onSubmit={handelSubmit}>
          <Label style={{ color: 'black' }} htmlFor="user">
            Usuario
          </Label>
          <Input id="user" />

          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" />

          <Button id="button-submit" type="submit">
            Submit
          </Button>
        </StyledForm>
      </Div>
    </>
  )
}

export { Login }
