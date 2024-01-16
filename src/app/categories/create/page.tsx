import CreateCategoryForm from '@/components/Forms/CreateCategory'
import { fetchCategories } from '@/services/categories'

export default async function CreateCategory() {
  const categories = await fetchCategories({ onlyHidden: false })

  return <CreateCategoryForm categories={categories} />
}
