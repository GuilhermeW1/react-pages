import * as React from 'react'
import styled from 'styled-components'

// const AddButton = styled.button`
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   border: 4px solid #141e27;
//   font-size: 2em;
//   padding: 3px;
//   line-height: 0;
// `

const DivContainer = styled.div`
  display: flex;
  max-height: 100vh;
  max-width: 100vw;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
`

function Home() {
  const [repositories, setRepositories] = React.useState([])
  //const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetch('http://api.github.com/users/GuilhermeW1/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
  }, [])

  return (
    <DivContainer>
      <div>
        <ul style={{ listStyle: 'none' }}>
          {repositories.map(repos => {
            return (
              <li key={repos.id}>
                <strong>{repos.name}</strong>
              </li>
            )
          })}
        </ul>
      </div>
    </DivContainer>
  )
}

export { Home }
