import styled from 'styled-components'

/* styled components from nav-links component*/
const Button = styled.button`
  background: ${props => props.theme.theme.colors.nav};
  color: ${props => props.theme.theme.colors.text};
  display: inline-block;

  text-decoration: none;
  padding: 10px 0 10px 10px;
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
    background: ${props => props.theme.theme.colors.nav};
    width: 300px;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    margin: 0;
  }
`

/*styled components from burger component*/
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

/*styled components from index*/
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
  padding: 30px 80px;
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

export { Button, Ul, NavB, Span, DivTheme, StyledBurger }
