export const dynamic = 'force-dynamic'

import CreateCategoryForm from '@/components/Forms/CreateCategory'
import { fetchCategories } from '@/services/categories'

export default async function CreateCategory() {
  const categories = await fetchCategories()

  return <CreateCategoryForm categories={categories} />
}
