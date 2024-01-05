import PageLayout from '@/layouts/PageLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageLayout title="Início">{children}</PageLayout>
}
