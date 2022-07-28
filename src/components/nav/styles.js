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
  align-items: center;
  margin-right: 10px;
  list-style: none;
  height: 100%;
  line-height: normal;

  @media (max-width: 768px) {
    padding: 20px 20px;
    flex-flow: column nowrap;
    position: fixed;
    align-items: start;
    justify-content: start;
    top: 0;
    right: 0;
    height: 100vh;
    background: black;
    width: 300px;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  }
`

const NavB = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 2;
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

export { Button, Ul, NavB, Span, DivTheme }
