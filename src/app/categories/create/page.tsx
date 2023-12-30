import CreateCategoryForm from '@/components/Forms/CreateCategory'
import { getBaseCategories } from '@/firebase/services/categories'
import PageLayout from '@/layouts/PageLayout'

export default async function CreateCategory() {
  const categories = await getBaseCategories()

  return (
    <PageLayout title="Nova categoria">
      <CreateCategoryForm categories={categories} />
    </PageLayout>
  )
}
