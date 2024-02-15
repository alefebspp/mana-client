import PageLayout from '@/layouts/PageLayout'
import navBarSections from '@/utils/helpers/navBarSections'
import { cookies } from 'next/headers'

export default function Layout({ children }: { children: React.ReactNode }) {
  const selectedChurch = cookies().get('@selected-church-id')?.value

  const createEventSection = {
    path: '/churchs/events?showModal=y',
    label: 'Novo evento',
    openModal: true
  }

  const churchsSections = navBarSections.filter(
    (section) => section.path === '/churchs'
  )
  const childrenModalSections = churchsSections[0].childrenSections?.filter(
    (child) => child.openModal
  )

  if (selectedChurch) {
    childrenModalSections?.push(createEventSection)
  }

  return (
    <PageLayout modalSections={childrenModalSections} title="Igrejas">
      {children}
    </PageLayout>
  )
}
