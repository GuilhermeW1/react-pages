import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.theme.colors.nav};
  color: ${props => props.theme.theme.colors.text};
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
  padding: 10px;
  font-size: 1.5em;
  font-weight: 500;
  border: none;
  font-family: sans-serif;
`

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-right: 10px;
  list-style: none;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding: 30px;
  background: ${props => props.theme.theme.colors.nav};
`

//#141e27

export { Button, Ul, Container }
