import PageLayout from '@/layouts/PageLayout'
import navBarSections from '@/utils/helpers/navBarSections'

export default function Layout({ children }: { children: React.ReactNode }) {
  const categoriesSections = navBarSections.filter(
    (section) => section.path === '/categories'
  )
  const childrenModalSections = categoriesSections[0].childrenSections?.filter(
    (child) => child.openModal
  )

  return (
    <PageLayout modalSections={childrenModalSections} title="Categorias">
      {children}
    </PageLayout>
  )
}
