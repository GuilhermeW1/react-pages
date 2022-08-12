import * as React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '../../../test/utlils'
import { Modal, ModalOpenButton, ModalContent, useModal } from '../index'

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  console.error.mockRestore()
})

function Test() {
  const teste = useModal()

  return teste
}
test('use modal out Modal throw an error', () => {
  expect(() => {
    render(<Test />)
  }).toThrowError('useModal have to be used With modal')
})

test('use modal return context', () => {
  expect(() => {
    render(
      <Modal>
        <Test />
      </Modal>,
    )
  }).not.toThrowError()
})

test('default behavior of modal', () => {
  const anyName = 'open modal'

  render(
    <Modal>
      <ModalOpenButton>
        <button>{anyName}</button>
      </ModalOpenButton>
      <ModalContent>
        <div>test content</div>
      </ModalContent>
    </Modal>,
  )

  expect(screen.getByRole('button', { name: anyName })).toBeInTheDocument()
  userEvent.click(screen.getByRole('button', { name: anyName }))
  expect(screen.getByText('test content')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /x/i })).toBeInTheDocument()
  userEvent.click(screen.getByRole('button', { name: /x/i }))
  expect(screen.queryByText('test content')).not.toBeInTheDocument()
  expect(screen.queryByRole('button', { name: /x/i })).not.toBeInTheDocument()
})

test('click out the modalContent closes the modal if there is open', () => {
  const anyName = 'open modal'

  render(
    <Modal>
      <ModalOpenButton>
        <button>{anyName}</button>
      </ModalOpenButton>
      <ModalContent>
        <div>test content</div>
      </ModalContent>
    </Modal>,
  )
  userEvent.click(screen.getByRole('button', { name: anyName }))
  expect(screen.queryByTestId('modal')).toBeInTheDocument()
  userEvent.click(screen.getByTestId('modal'))
  expect(screen.queryByTestId('modal')).not.toBeInTheDocument()

  //screen.debug()
})
