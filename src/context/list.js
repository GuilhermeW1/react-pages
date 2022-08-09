import * as React from 'react'
import { list, ACTIONS } from '../utils/fake-database'

const ListContext = React.createContext({})

function reducer(fruit, action) {
  switch (action.type) {
    case ACTIONS.ADD_FRUIT:
      if (
        action.payload.fruitValues.fruit == '' ||
        action.payload.fruitValues.description == ''
      ) {
        return fruit
      }
      return [...fruit, newFruit(action.payload.fruitValues)]

    case ACTIONS.DELETE_FRUIT:
      return fruit.filter(fruit => fruit.id !== action.payload.id)
    default:
      return fruit
  }
}

function newFruit(fruit) {
  return {
    id: Date.now(),
    name: fruit.fruit,
    description: fruit.description,
  }
}

// eslint-disable-next-line react/prop-types
function ListProvider({ children }) {
  const [fruit, dispatch] = React.useReducer(reducer, list)

  return (
    <ListContext.Provider value={[fruit, dispatch, ACTIONS]}>
      {children}
    </ListContext.Provider>
  )
}

function useList() {
  const context = React.useContext(ListContext)
  if (context === undefined) {
    throw new Error('have to use listProvider')
  }
  return context
}

export { ListProvider, useList, reducer }
