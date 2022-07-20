import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.theme.colors.nav};
  color: ${props => props.theme.theme.colors.text};
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
  font-weight: 600;
  border: none;
  cursor: pointer;
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
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding: 30px;
  background: ${props => props.theme.theme.colors.nav};
`

const Span = styled.span`
  display: block;
  font-family: 'Poppins', sans-serif;
`

const DivTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
//#141e27

export { Button, Ul, Container, Span, DivTheme }
