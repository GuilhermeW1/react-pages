import * as React from 'react'
import { useList } from '../../context/list'
import { BsSearch } from 'react-icons/bs'
import { Div, Form, Input, DivSearch, Button, DivSearched } from './styles'

function SearchBar() {
  const [list] = useList()
  const [searchWord, setSearch] = React.useState('')

  const handleSearch = e => {
    e.preventDefault()
    setSearch('')
  }

  function searchInList() {
    const listMatch = list.filter(el => {
      const listItem = el.name.toLowerCase()
      const word = searchWord.toLowerCase()
      return listItem.includes(word)
    })
    return listMatch
  }

  const listItems = searchWord.length > 0 ? searchInList() : null

  const handleChange = React.useCallback(e => {
    setSearch(e.target.value)
  }, [])

  return (
    <Div>
      <Form onSubmit={handleSearch} aria-label="search-form">
        <DivSearch>
          <Input
            type="text"
            placeholder="search"
            onChange={handleChange}
            value={searchWord}
          />
          <Button type="submit">
            <BsSearch size="20" />
          </Button>
        </DivSearch>

        {listItems && listItems.length > 0 ? (
          <DivSearched>
            {listItems.map(listItem => {
              return <div key={listItem.id}>{listItem.name}</div>
            })}
          </DivSearched>
        ) : searchWord ? (
          <DivSearched role="alert">
            nothing found with the key: {searchWord}
          </DivSearched>
        ) : null}
      </Form>
    </Div>
  )
}

export default SearchBar
