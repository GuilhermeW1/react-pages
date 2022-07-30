import * as React from 'react'
import { useModal } from '../modal/index'
import { ACTIONS } from '../../utils/fake-database'
import { Div, Container, Label, Input, Button } from './style'

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
      <Container>
        <Label htmlFor="fruit">Fruit name</Label>
        <Input id="fruit" type="text" />

        <Label htmlFor="description">Description</Label>
        <Input id="description" type="text" />

        <Button type="submit">submit</Button>
      </Container>
    </form>
  )
}

// eslint-disable-next-line react/prop-types
const FruitItem = ({ children, dispatch, id }) => {
  function handleDelete() {
    dispatch({ type: ACTIONS.DELETE_FRUIT, payload: { id: id } })
  }
  return (
    <Div>
      {children}
      <button onClick={handleDelete}>delete</button>
    </Div>
  )
}

export { AddFruitForm, FruitItem }
