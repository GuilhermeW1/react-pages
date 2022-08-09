import * as React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RenderFruits } from '../index'
import { list } from '../../../utils/fake-database'

test(`RenderFruits component delete item`, () => {
  let listCopy = list

  const deleteDispatch = jest.fn(
    args => (listCopy = listCopy.filter(item => args.payload.id !== item.id)),
  )

  const id = 0
  const { rerender } = render(
    <RenderFruits list={listCopy} dispatch={deleteDispatch} />,
  )
  const listLength = listCopy.length
  expect(screen.getAllByLabelText('fruit-item')).toHaveLength(listLength)
  userEvent.click(screen.getByTestId(id))
  //ensure the list is updated
  expect(listCopy).toHaveLength(listLength - 1)
  //ensure the right call method
  expect(deleteDispatch).toHaveBeenCalledTimes(1)
  expect(deleteDispatch).toHaveBeenCalledWith({
    payload: { id: id },
    type: 'delete-fruit',
  })
  rerender(<RenderFruits list={listCopy} dispatch={deleteDispatch} />)
  expect(screen.getAllByLabelText('fruit-item')).toHaveLength(listLength - 1) //-1 item removed
})
