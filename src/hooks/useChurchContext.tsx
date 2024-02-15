import { useContext } from 'react'
import ChurchContext, { ChurchContextProps } from '@/contexts/churchContext'

const useChurchContext = (): ChurchContextProps => {
  const context = useContext(ChurchContext)

  if (!context) {
    throw new Error('useChurchContext must be used within an ChurchProvider')
  }

  return context
}

export default useChurchContext
