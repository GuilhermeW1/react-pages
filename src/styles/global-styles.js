import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body{
      -webkit-font-smoothing: antialiased;
      
      background: ${props => props.theme.theme.colors.background};
      color: ${props => props.theme.theme.colors.text};
    }
  }
`
