import * as React from 'react'
import list from '../../utils/fake-database'

function SearchBar() {
  const [search, setSearch] = React.useState('')
  const [searchedList, setSearchedList] = React.useState(null)

  const handleSearch = e => {
    e.preventDefault()
  }

  React.useEffect(() => {
    function searchInList() {
      if (!search) {
        return
      }
      const listMatch = list.filter(el => {
        const listItem = el.name.toLowerCase()
        const searchWord = search.toLowerCase()
        return listItem.includes(searchWord)
      })
      return listMatch
    }
    const listItems = searchInList()
    setSearchedList(listItems)
  }, [search])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSearch} style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="search"
          onChange={handleChange}
          value={search}
        />
        <button type="submit">p</button>
      </form>
      <ul style={{ position: 'absolute' }}>
        {searchedList
          ? searchedList.map(listItem => {
              return <li key={listItem.id}>{listItem.name}</li>
            })
          : null}
      </ul>
    </div>
  )
}

export default SearchBar
