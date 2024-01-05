'use client'
import { PropsWithChildren } from 'react'

import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '../Button'

type Props = {
  hidden: boolean
  closeNav: () => void
} & PropsWithChildren

function NavBarRoot({ children, hidden, closeNav }: Props) {
  function handleCloseNav() {
    closeNav()
  }

  return (
    <nav
      className={cn('hidden', {
        'lg:flex lg:flex-col w-[14rem] xl:w-[18rem] 2xl:w-[20rem] h-full border-r-2 border-gray-border':
          !hidden
      })}
    >
      <div className="w-full py-sm pl-4">
        <Button
          aria-label="Close nav button"
          onClick={handleCloseNav}
          variant="ghost"
          size="icon"
        >
          <X className="text-gray-dark" />
        </Button>
      </div>
      <ul className="w-full h-full flex flex-col">{children}</ul>
    </nav>
  )
}
export default NavBarRoot
