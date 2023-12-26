import CreateCategoryForm from '@/components/Forms/CreateCategory'
import PageLayout from '@/layouts/PageLayout'

export default function CreateCategory() {
  return (
    <PageLayout title="Nova categoria">
      <CreateCategoryForm />
    </PageLayout>
  )
}
