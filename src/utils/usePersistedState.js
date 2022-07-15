import * as React from 'react'

function usePersistedState(key, initialState) {
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(key)
    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])
  return [state, setState]
}

export { usePersistedState }
