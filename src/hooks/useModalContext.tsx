import { useContext } from 'react'
import ModalContext, { ModalContextProps } from '../contexts/modalContext'

const useModalContext = (): ModalContextProps => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModalContext must be used within an ModalProvider')
  }

  return context
}

export default useModalContext
