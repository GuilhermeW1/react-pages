import * as React from 'react'
import { useModal } from '../modal/index'
import { ACTIONS } from '../../utils/fake-database'
import { Div, Container, Label, Input, Button, Spinner } from './style'

// eslint-disable-next-line , react/prop-types
function AddFruitForm({ dispatch }) {
  const [, setIsOpen] = useModal()
  const [disabled, setDisabled] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  //this is just to simulate some async save in db with some time
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function handelSubmit(e) {
    //i don`t know if its better to setDisabled first or preventDefault first '-'
    setDisabled(true)
    setIsLoading(true)
    e.preventDefault()
    await delay(1000)

    const { fruit, description } = e.target.elements
    const fruitValues = {
      fruit: fruit.value,
      description: description.value,
    }
    dispatch({ type: ACTIONS.ADD_FRUIT, payload: { fruitValues } })
    setIsOpen(false)
  }

  return (
    <form onSubmit={handelSubmit}>
      <Container>
        <Label htmlFor="fruit">Fruit name</Label>
        <Input id="fruit" type="text" required />

        <Label htmlFor="description">Description</Label>
        <Input id="description" type="text" required />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" disabled={disabled}>
            submit
          </Button>
          <div style={{ lineHeight: 'normal', marginLeft: '10px' }}>
            {isLoading ? <Spinner /> : null}
          </div>
        </div>
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
    <Div aria-label="fruit-item">
      {children}
      <button onClick={handleDelete} data-testid={id}>
        delete
      </button>
    </Div>
  )
}

const RenderFruits = ({ dispatch, list }) => {
  return list.map(item => (
    <FruitItem key={item.id} dispatch={dispatch} id={item.id}>
      <strong>{item.name}</strong>
      <div>{item.description}</div>
    </FruitItem>
  ))
}

export { AddFruitForm, RenderFruits }
