import * as React from 'react'
import { useList } from '../../context/list'
import { BsSearch } from 'react-icons/bs'
import { Div, Form, Input, DivSearch, Button, DivSearched } from './styles'

function SearchBar() {
  const [list] = useList()
  const [search, setSearch] = React.useState('')

  const handleSearch = e => {
    e.preventDefault()
    setSearch('')
  }

  function searchInList() {
    const listMatch = list.filter(el => {
      const listItem = el.name.toLowerCase()
      const searchWord = search.toLowerCase()
      return listItem.includes(searchWord)
    })
    return listMatch
  }

  const listItems = search.length > 0 ? searchInList() : null

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
            value={search}
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
        ) : search ? (
          <DivSearched role="alert">
            nothing found with the key: {search}
          </DivSearched>
        ) : null}
      </Form>
    </Div>
  )
}

export default SearchBar
