'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ElementType, useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

import { cn } from '../../lib/utils'

export interface NavBarSectionProps {
  icon?: ElementType
  label: string
  path: string
  childrenSections?: {
    path: string
    label: string
    icon?: ElementType
    openModal?: boolean
  }[]
}

function NavBarSection({
  path,
  icon: Icon,
  label,
  childrenSections
}: NavBarSectionProps) {
  const location = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const sectionIsOpen = location.includes(path)

  const handleSectionClick = () => {
    if (childrenSections && !sectionIsOpen) {
      return setIsOpen(!isOpen)
    }
    router.push(path)
  }

  return (
    <li className="flex flex-col">
      <div
        role="section"
        onClick={handleSectionClick}
        className={cn(
          'w-full text-gray-dark group flex items-center gap-[0.5rem] px-[1rem] py-[1rem] cursor-pointer hover:text-purple-primary border-b-2 border-gray-border',
          {
            'text-purple-primary': location.includes(path),
            'pb-0 border-0': childrenSections && (isOpen || sectionIsOpen)
          }
        )}
      >
        {Icon && <Icon className="w-5 h-5 xl:w-6 xl:h-6" />}

        <p className="font-medium text-xs xl:text-sm">{label}</p>
        {childrenSections ? (
          isOpen || sectionIsOpen ? (
            <ChevronDown className="w-4 h-4 xl:w-5 xl:h-5 ml-auto text-gray-dark group-hover:text-purple-primary" />
          ) : (
            <ChevronUp className="w-4 h-4 xl:w-5 xl:h-5 ml-auto text-gray-dark group-hover:text-purple-primary" />
          )
        ) : null}
      </div>
      {childrenSections && (isOpen || sectionIsOpen) ? (
        <ul className="w-full flex flex-col border-b-2 border-gray-border pb-[1rem]">
          {childrenSections
            .filter((section) => !section.openModal)
            .map(({ label, path: childPath, icon: Icon }) => (
              <li
                key={label}
                onClick={() => router.push(`${path}${childPath}`)}
                className={cn(
                  'flex items-center gap-[0.5rem] font-medium pt-[1rem] px-[1rem] cursor-pointer hover:text-purple-primary text-gray-dark',
                  {
                    'text-purple-primary': location === `${path}${childPath}`
                  }
                )}
              >
                {Icon && <Icon className="w-3 h-3 xl:w-4 xl:h-4" />}
                <p className="text-xs xl:text-sm">{label}</p>
              </li>
            ))}
        </ul>
      ) : null}
    </li>
  )
}

export default NavBarSection
