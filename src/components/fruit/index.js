import * as React from 'react'
import { useModal } from '../modal/index'
import { ACTIONS } from '../../utils/fake-database'

// eslint-disable-next-line , react/prop-types
function AddFruitForm({ dispatch }) {
  const [, setIsOpen] = useModal()

  function handelSubmit(e) {
    e.preventDefault()
    const { fruit, description } = e.target.elements
    const fruitValues = {
      fruit: fruit.value,
      description: description.value
    }
    dispatch({ type: ACTIONS.ADD_FRUIT, payload: { fruitValues } })
    setIsOpen(false)
  }

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="fruit">Fruit name</label>
      <input id="fruit" />

      <label htmlFor="description">description</label>
      <input id="description" />

      <button type="submit">submit</button>
    </form>
  )
}

export { AddFruitForm }
