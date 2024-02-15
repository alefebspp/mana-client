'use client'
import Link from 'next/link'
import { PropsWithChildren, useState } from 'react'
import { Menu } from 'lucide-react'

import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import useSections from '@/hooks/useSections'

import { Church } from '@/services/types'
import SelectedChurchBar from '@/components/SelectedChurchBar'

type Props = PropsWithChildren & {
  title: string
  modalSections?: {
    path: string
    label: string
  }[]
  churchs: Church[]
}

export default function PageLayoutContent({
  children,
  title,
  modalSections,
  churchs
}: Props) {
  const [showNav, setShowNav] = useState(false)
  const { sections } = useSections()

  const handleCloseNav = () => setShowNav(false)

  return (
    <div className="w-full h-full flex flex-col">
      <SelectedChurchBar churchs={churchs} />
      <div className="w-full h-full flex">
        <NavBar.Root closeNav={handleCloseNav} hidden={!showNav}>
          {sections.map((section) => (
            <NavBar.Section
              key={section.label}
              path={section.path}
              label={section.label}
              icon={section.icon}
              childrenSections={section.childrenSections}
            ></NavBar.Section>
          ))}
        </NavBar.Root>
        <div className="w-full h-full flex flex-col">
          <div className="w-full flex items-center px-sm pt-sm">
            {!showNav && (
              <Button
                onClick={() => setShowNav(true)}
                variant="ghost"
                size="icon"
                className="hover:bg-gray-200 rounded-full p-[6px] mr-2"
              >
                <Menu className="text-gray-dark" />
              </Button>
            )}
            <h1 className="w-fit text-sm md:text-md xl:text-xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#b393d3] to-[#553c9a]">
              {title}
            </h1>

            {modalSections && (
              <div className="px-8">
                {modalSections.map((section, index) => (
                  <Link
                    className="bg-purple-light text-purple-primary font-medium text-sm px-4 py-1 rounded-3xl"
                    href={section.path}
                    key={index}
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="w-full h-full p-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}
