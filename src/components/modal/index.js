import * as React from 'react'
import { Div, DivAlign, Button } from './styles'

const ModalContext = React.createContext()

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach(fn => fn && fn(...args))

function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(false)
  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

// eslint-disable-next-line react/prop-types, no-unused-vars
function ModalContent({ action, children, ...props }) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)

  function stopPropagation(event) {
    event.stopPropagation()
  }

  return isOpen ? (
    <Div {...props} onClick={() => setIsOpen(false)}>
      <DivAlign onClick={stopPropagation}>
        <ModalCloseButton>
          <Button>X</Button>
        </ModalCloseButton>

        <div>{children}</div>
      </DivAlign>
    </Div>
  ) : null
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  })
}

function ModalCloseButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  })
}

function useModal() {
  const context = React.useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal have to be used With modal')
  }
  return context
}

export { ModalContent, Modal, ModalCloseButton, ModalOpenButton, useModal }
