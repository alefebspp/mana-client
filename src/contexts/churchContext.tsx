'use client'
import { setSelectedChurchIdCookie } from '@/lib/actions/churchs'
import { Church } from '@/services/types'
import { createContext, FC, ReactNode, useState, useEffect } from 'react'

export interface ChurchContextProps {
  selectedChurch: Church | null
  selectChurch: (church: Church) => void
}

interface ChurchProviderProps {
  children: ReactNode
}

const ChurchContext = createContext<ChurchContextProps>(
  {} as ChurchContextProps
)

export const ChurchProvider: FC<ChurchProviderProps> = ({ children }) => {
  const [selectedChurch, setSelectedChurch] = useState<Church | null>(null)

  function selectChurch(church: Church) {
    setSelectedChurch(church)

    if (typeof window !== 'undefined') {
      localStorage.setItem('selected-church', JSON.stringify(church))
      setSelectedChurchIdCookie(church.id)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedChurch = localStorage.getItem('selected-church')
      if (storedChurch !== null) {
        try {
          const church = JSON.parse(storedChurch)
          setSelectedChurch(church)
          setSelectedChurchIdCookie(church.id)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }, [])

  return (
    <ChurchContext.Provider
      value={{
        selectedChurch,
        selectChurch
      }}
    >
      {children}
    </ChurchContext.Provider>
  )
}

export default ChurchContext
