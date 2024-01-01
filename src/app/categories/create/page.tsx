export const dynamic = 'force-dynamic'

import CreateCategoryForm from '@/components/Forms/CreateCategory'
import PageLayout from '@/layouts/PageLayout'
import { fetchCategories } from '@/services/categories'

export default async function CreateCategory() {
  const categories = await fetchCategories()

  return (
    <PageLayout title="Nova categoria">
      <CreateCategoryForm categories={categories} />
    </PageLayout>
  )
}
