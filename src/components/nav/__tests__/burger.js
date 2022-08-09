import * as React from 'react'
import Burger from '../burger'
import '@testing-library/jest-dom'
import { screen, render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProv } from '../../../context/theme-provider'
import { BrowserRouter } from 'react-router-dom'
import { ListProvider } from '../../../context/list'

function render(children) {
  return rtlRender(
    <BrowserRouter>
      <ThemeProv>
        <ListProvider>{children}</ListProvider>
      </ThemeProv>
    </BrowserRouter>,
  )
}

test('render burger', () => {
  render(
    <ThemeProv>
      <Burger />
    </ThemeProv>,
  )
  expect(screen.getByTestId(`burger-${false}`)).toBeInTheDocument() //closed
  userEvent.click(screen.getByTestId('burger-false'))
  expect(screen.queryByTestId(`burger-${false}`)).not.toBeInTheDocument()
  expect(screen.getByTestId(`burger-${true}`)).toBeInTheDocument() //open

  userEvent.click(screen.getByTestId('burger-true'))
  expect(screen.getByTestId(`burger-${false}`)).toBeInTheDocument()
  expect(screen.queryByTestId(`burger-${true}`)).not.toBeInTheDocument() //open
})
