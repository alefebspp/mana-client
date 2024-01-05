import { getBaseCategories } from '@/firebase/services/categories'
import CategoriesTable from '@/components/Tables/CategoriesTable'

export default async function Categories() {
  const categories = await getBaseCategories()

  return (
      <CategoriesTable baseCategories={categories} />
  )
}
