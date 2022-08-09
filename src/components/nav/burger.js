import * as React from 'react'
import NavLinks from './nav-links'
import { StyledBurger } from './styles'

function Burger() {
  const [open, setIsOpen] = React.useState(false)
  const handleClick = () => setIsOpen(prev => !prev)
  return (
    <div>
      <StyledBurger
        open={open}
        onClick={handleClick}
        data-testid={`burger-${open}`}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavLinks open={open} />
    </div>
  )
}

export default Burger
