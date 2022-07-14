import * as React from 'react'
import { Modal, useModal } from '../components/modal/index'

function TesteScreen() {
  const { isOpen, openModal } = useModal()
  console.log(isOpen + 'teste')
  return (
    <>
      <div>
        <h1>hello world</h1>
        <button onClick={openModal}>abrir</button>
      </div>
      <Modal />
    </>
  )
}

export { TesteScreen }
