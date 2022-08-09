import * as React from 'react'
import { Nav } from '../index'
import '@testing-library/jest-dom'
import { screen, render as rtlRender } from '@testing-library/react'
import { ThemeProv } from '../../../context/theme-provider'
import { BrowserRouter } from 'react-router-dom'
import { ListProvider } from '../../../context/list'

//jest.mock('react-router-dom') you can mock react-router and push out the browserRouter

function render(children) {
  return rtlRender(
    <BrowserRouter>
      <ThemeProv>
        <ListProvider>{children}</ListProvider>
      </ThemeProv>
    </BrowserRouter>,
  )
}

test('render navbar', () => {
  render(<Nav />)
  expect(screen.getByText('Logo')).toBeInTheDocument()
  expect(screen.getByRole('switch')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
  expect(screen.getByRole('form', { name: /search-form/i })).toBeInTheDocument()
})
