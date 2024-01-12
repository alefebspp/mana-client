export const dynamic = 'force-dynamic'

import CreateCategoryForm from '@/components/Forms/CreateCategory'
import { fetchCategories, findCategory } from '@/services/categories'
import { Category } from '@/services/types'

export default async function UpdateCategory({
  params
}: {
  params: { id: string }
}) {
  const categories = await fetchCategories({ onlyHidden: false })
  let categoryToUpdate: Category | undefined

  if (params.id) {
    const category = await findCategory(params.id)
    categoryToUpdate = category
  }

  return (
    <CreateCategoryForm
      categoryToUpdate={categoryToUpdate}
      categories={categories}
    />
  )
}
