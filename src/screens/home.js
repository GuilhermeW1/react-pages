import * as React from 'react'
import styled from 'styled-components'
import list from '../utils/fake-database'

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
  display: grid;
  max-height: 100vh;
  max-width: 100vw;
  grid-template-columns: auto auto auto;
  gap: 1em;

  justify-content: space-evenly;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  flex-wrap: wrap;
  margin-bottom: 80px;
`

const Div = styled.div`
  height: 200px;
  width: 25vw;
  margin: 10px;
  border: 1px solid green;
  text-align: center;
  padding: 10px;
`

function Home() {
  return (
    <DivContainer>
      {list.map(item => {
        return (
          <Div key={item.id}>
            <strong>{item.name}</strong>
            <div>{item.description}</div>
          </Div>
        )
      })}
    </DivContainer>
  )
}

export default Home
