export const dynamic = 'force-dynamic'

import CategoriesTable from '@/components/Tables/CategoriesTable'

import { fetchCategories } from '@/services/categories'

export default async function Categories() {
  const categories = await fetchCategories()

  return <CategoriesTable baseCategories={categories} />
}
