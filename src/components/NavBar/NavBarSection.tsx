'use client'
import { usePathname, useRouter } from 'next/navigation'
import { ElementType, useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

import { cn } from '../../lib/utils'

export interface NavBarSectionProps {
  icon: ElementType
  label: string
  path: string
  childrenSections?: { path: string; label: string }[]
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
          'w-full text-gray-dark group flex items-center gap-[0.5rem] p-[1rem] border-b-2 border-gray-dark bg-purple-primary cursor-pointer',
          {
            'border-0': isOpen,
            'text-white ': location.includes(path)
          }
        )}
      >
        <Icon className="w-5 h-5 group-hover:text-white" />

        <p className="group-hover:text-white font-medium">{label}</p>
        {childrenSections ? (
          isOpen || sectionIsOpen ? (
            <ChevronDown className="ml-auto text-gray-dark" />
          ) : (
            <ChevronUp className="ml-auto text-gray-dark" />
          )
        ) : null}
      </div>
      {childrenSections && (isOpen || sectionIsOpen) ? (
        <ul className="w-full flex flex-col bg-purple-primary">
          {childrenSections.map((section) => (
            <li
              key={section.label}
              onClick={() => router.push(`${path}${section.path}`)}
              className={cn(
                'bg-white border-b border-r border-gray-dark font-medium pt-[1rem] px-[1rem] cursor-pointer hover:text-purple-primary text-gray-dark',
                {
                  'text-purple-primary': location === `${path}${section.path}`
                }
              )}
            >
              <p>{section.label}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export default NavBarSection
