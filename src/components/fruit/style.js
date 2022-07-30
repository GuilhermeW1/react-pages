import styled from 'styled-components'

const Div = styled.div`
  height: 200px;
  width: 25vw;
  margin: 10px;
  border: 1px solid green;
  text-align: center;
  padding: 10px;
`

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
`
const Label = styled.label`
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  align-self: center;
  margin: 10px 20px;
  color: ${props => props.theme.theme.colors.text};
`

const Input = styled.input`
  border: 1px solid gray;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  background: ${props => props.theme.theme.colors.background};
  box-shadow: 3px 3px 13px -7px #000000;
  margin-bottom: 10px;
  color: ${props => props.theme.theme.colors.text};
  padding: 5px;
`
const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  border: 1px solid black;
  background: ${props => props.theme.theme.colors.nav}
  color: ${props => props.theme.theme.colors.text};
`

export { Div, Container, Label, Input, Button }
