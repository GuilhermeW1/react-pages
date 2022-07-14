import * as React from 'react'
import { Nav } from '../index'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProv } from '../../../context/theme-provider'
import { BrowserRouter } from 'react-router-dom'

//jest.mock('react-router-dom') you can mock react-router and push out the browserRouter

test('render navbar', () => {
  render(
    <BrowserRouter>
      <ThemeProv>
        <Nav />
      </ThemeProv>
    </BrowserRouter>
  )
  expect(screen.getByText('Logo')).toBeInTheDocument()
  expect(screen.getByRole('switch')).toBeInTheDocument()
  expect(screen.getByRole(/button/i)).toBeInTheDocument()
  screen.debug()
})
