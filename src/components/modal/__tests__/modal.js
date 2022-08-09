import * as React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '../../../test/utlils'
import { Modal, ModalOpenButton, ModalContent } from '../index'

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
