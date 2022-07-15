import * as React from 'react'
import { Div } from './styles'

const ModalContext = React.createContext()

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach(fn => fn && fn(...args))

function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(false)
  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

// eslint-disable-next-line react/prop-types
function ModalContent({ action, name }) {
  const [isOpen] = React.useContext(ModalContext)

  return isOpen ? (
    <Div>
      <div>
        <ModalCloseButton>
          <button>X</button>
        </ModalCloseButton>
      </div>
      <div>
        <h1>you hav shure to go out?</h1>
      </div>
      <div>
        <ModalCloseButton>
          <button>Cancel</button>
        </ModalCloseButton>
        <ModalCloseButton>
          <button onClick={action}>{name}</button>
        </ModalCloseButton>
      </div>
    </Div>
  ) : null
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick)
  })
}

function ModalCloseButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick)
  })
}

export { ModalContent, Modal, ModalCloseButton, ModalOpenButton }
