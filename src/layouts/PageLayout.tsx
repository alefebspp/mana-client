'use client'
import { PropsWithChildren, useState } from 'react'
import { Menu } from 'lucide-react'
import NavBar from '@/components/NavBar'
import navBarSections from '@/utils/helpers/navBarSections'
import Button from '@/components/Button'

type Props = PropsWithChildren & {
  title: string
}

export default function PageLayout({ children, title }: Props) {
  const [showNav, setShowNav] = useState(false)

  const handleClose = () => setShowNav(false)

  return (
    <main className="w-screen h-screen bg-white flex">
      <NavBar.Root closeNav={handleClose} hidden={!showNav}>
        {navBarSections.map((section) => (
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
        </div>
        <div className="w-full h-full p-sm">{children}</div>
      </div>
    </main>
  )
}
