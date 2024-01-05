export const dynamic = 'force-dynamic'
import CreateCategoryForm from '@/components/Forms/CreateCategory'
import { getBaseCategories } from '@/firebase/services/categories'

export default async function CreateCategory() {
  const categories = await getBaseCategories()

  return (
      <CreateCategoryForm categories={categories} />
  )
}
