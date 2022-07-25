import * as React from 'react'
import '@testing-library/jest-dom'
import { render } from '../../../test/utlils'
import SearchBar from '../index'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('search items how exist in list', () => {
  render(<SearchBar />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
  expect(screen.getByRole('textbox')).toHaveTextContent('')
  userEvent.type(screen.getByRole('textbox'), 'orange')
  expect(screen.getByText(/orange/i)).toBeInTheDocument()
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
})

test('search item that not exist in the list', () => {
  render(<SearchBar />)
  const stringWhoNotExistInList = 'fsadlfksf'
  userEvent.type(screen.getByRole('textbox'), stringWhoNotExistInList)
  expect(screen.getByRole('alert')).toHaveTextContent(
    `nothing found with the key: ${stringWhoNotExistInList}`
  )
})

test('search button clean the input when pressed', () => {
  render(<SearchBar />)
  userEvent.type(screen.getByRole('textbox'), 'orange')
  userEvent.click(screen.getByRole('button', { type: 'submit' }))
  expect(screen.getByRole('textbox')).toHaveTextContent('')
  screen.debug()
})
