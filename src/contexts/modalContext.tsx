'use client'
import { createContext, FC, ReactNode, useState } from 'react'

export interface ModalContextProps {
  modalIsOpen: boolean
  openModal: () => void
  closeModal: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps)

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
