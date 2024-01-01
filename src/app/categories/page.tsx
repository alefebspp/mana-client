export const dynamic = 'force-dynamic'

import CategoriesTable from '@/components/Tables/CategoriesTable'
import PageLayout from '@/layouts/PageLayout'

import { fetchCategories } from '@/services/categories'

export default async function Categories() {
  const categories = await fetchCategories()

  return (
    <PageLayout title="Categorias">
      <CategoriesTable baseCategories={categories} />
    </PageLayout>
  )
}
