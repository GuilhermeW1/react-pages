import * as React from 'react'
import styled from 'styled-components'
import { useList } from '../context/list'
import { Modal, ModalOpenButton, ModalContent } from '../components/modal/index'
import { AddFruitForm, RenderFruits } from '../components/fruit/index'

const AddButton = styled.button`
  z-index: 1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 4px solid #141e27;
  font-size: 2em;
  padding: 3px;
  line-height: 0;
  position: fixed;
  top: 75%;
  right: 80px;

  abbr {
    text-decoration: none;
  }
`

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
  position: relative;
`

function Home() {
  const [fruit, dispatch] = useList()

  return (
    <DivContainer>
      <RenderFruits list={fruit} dispatch={dispatch} />
      <Modal>
        <ModalOpenButton>
          <AddButton>
            <abbr title="adicionar uma nova fruta">+</abbr>
          </AddButton>
        </ModalOpenButton>
        <ModalContent>
          <AddFruitForm dispatch={dispatch} />
        </ModalContent>
      </Modal>
    </DivContainer>
  )
}

export default Home
