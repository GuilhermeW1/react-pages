import styled from 'styled-components'

const Div = styled.div`
  z-index: 3;
  height: 100%;
  width: 100%;
  background: #cddcf5;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.97;
`

const DivAlign = styled.div`
  display: flex;
  opacity: 1;
  background: ${props => props.theme.theme.colors.background};
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 1px solid black;
`

const Button = styled.button`
  line-height: 1;
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid gray;
  cursor: pointer;
  margin: 20px 20px 0 0;
  align-self: flex-end;
`

export { Div, DivAlign, Button }
