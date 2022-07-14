import * as React from 'react'

const ModalContext = React.createContext()

function ModalProvider(props) {
  const [isOpen, setIsOpen] = React.useState(false)

  const openModal = React.useCallback(() => {
    setIsOpen(true)
  })

  const closeModal = React.useCallback(() => {
    setIsOpen(false)
  })

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal }}
      {...props}
    />
  )
}

function Modal() {
  const { isOpen, closeModal } = React.useContext(ModalContext)

  return (
    <div>
      {isOpen ? (
        <div>
          <div>
            <div>
              <button onClick={closeModal}>X</button>
            </div>
            <div>
              <h1>you hav shure to go out?</h1>
            </div>
            <div>
              <button onClick={closeModal}>Cancel</button>
              <button>Confirm</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function useModal() {
  const isOpen = React.useContext(ModalContext)
  console.log('useModal' + isOpen)
  return isOpen
}

function DefaultModal() {
  return (
    <ModalProvider>
      <Modal />
    </ModalProvider>
  )
}

export { Modal, useModal, ModalProvider, DefaultModal }
