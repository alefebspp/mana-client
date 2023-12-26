'use client'
import NavBar from '@/components/NavBar'

import navBarSections from '@/utils/helpers/navBarSections'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <NavBar.Root>
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
      <main className="flex-grow overflow-y-auto">{children}</main>
    </div>
  )
}
