import styled from 'styled-components'

const Div = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
`

const DivSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: normal;
`

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
`

const Input = styled.input`
  padding: 10px;
  height: 100%;
  width: 100%;
  border-radius: 7px 0px 0px 0px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  border: none;
  color: ${props => props.theme.theme.colors.text};
  background: ${props => props.theme.theme.colors.search};
  border: 1px solid gray;
`

const A = styled.a`
  margin-top: 3px;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;

  background: black;
`

const Button = styled.button`
  height: 100%;
  width: 40px;
  background: ${props => props.theme.theme.colors.background};
  border: none;
  padding: 9px;
  border-radius: 0px 7px 0 0px;
  cursor: pointer;
  border: 1px solid gray;

  svg {
    color: ${props => props.theme.theme.colors.text};
  }
`

const DivSearched = styled.div`
  border: 1px solid gray;
  position: absolute;
  top: 2.3em;
  width: 100%;
  background: #d3d3d3;
  max-height: 50vh;
  padding: 10px;
  border-radius: 0 0 7px 7px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
`

export { Div, Form, Input, A, DivSearch, Button, DivSearched }
