import { PropsWithChildren } from 'react'

import PageLayoutContent from './PageLayoutContent'
import { getChurchs } from '@/services/churchs'

type Props = PropsWithChildren & {
  title: string
  modalSections?: {
    path: string
    label: string
  }[]
}

export default async function PageLayout({
  children,
  title,
  modalSections
}: Props) {
  const churchs = await getChurchs({ onlyHidden: false })

  return (
    <main className="w-screen h-screen bg-white flex">
      <PageLayoutContent
        churchs={churchs.data}
        title={title}
        modalSections={modalSections}
      >
        {children}
      </PageLayoutContent>
    </main>
  )
}
