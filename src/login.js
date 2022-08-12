import * as React from 'react'
import { useAuth } from './context/auth-provider'
import styled from 'styled-components'
import './styles/login-styles.css'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'

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
  padding: 7px;
  font-size: 1em;
  text-color: #030303;
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: 3px 3px 13px -7px #000000;
  transition: 0.2s;

  &:hover {
    background: #cddcf5;
  }
`

const Input = styled.input`
  border: none;
  background: #cddcf5;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
`

const PassInput = styled.input`
  border: none;
  background: #cddcf5;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  max-height: 35px;
  width: 170px;
`
const Span = styled.span`
  background: #cddcf5;
  padding: 8px;
  border-radius: 0 5px 5px 0;
  width: 30px;
`

const Label = styled.label`
  font-family: 'Poppins', sans-serif;

  font-size: 1.5em;
  font-weight: 500;
`

function Login() {
  const { login } = useAuth()
  const [disabled, setDisabled] = React.useState(false)

  React.useEffect(() => {
    window.history.pushState({}, '', '/home')
  }, [])

  function handelSubmit(event) {
    setDisabled(true)
    event.preventDefault()
    const { user, password } = event.target.elements
    login(user.value, password.value)
  }

  // to make the password visible
  const [visible, setVisible] = React.useState(false)
  function ver() {
    setVisible(!visible)
  }

  return (
    <>
      <Div>
        <StyledForm onSubmit={handelSubmit}>
          <Label style={{ color: 'black' }} htmlFor="user">
            Usuario
          </Label>
          <Input id="user" type="text" required />

          <Label htmlFor="password">Senha</Label>
          <div
            style={{
              height: '35px',
              display: 'flex',

              justifyContent: 'center',
            }}
          >
            <PassInput
              id="password"
              type={visible ? 'text' : 'password'}
              required
            />
            <Span onClick={ver}>
              {visible ? <FaRegEye /> : <FaRegEyeSlash />}
            </Span>
          </div>

          <Button id="button-submit" type="submit" disabled={disabled}>
            Submit
          </Button>
        </StyledForm>
      </Div>
    </>
  )
}

export { Login }
