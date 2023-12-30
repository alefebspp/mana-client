import { getBaseCategories } from '@/firebase/services/categories'

import PageLayout from '@/layouts/PageLayout'
import CategoriesTable from '@/components/Tables/CategoriesTable'

export default async function Categories() {
  const categories = await getBaseCategories()

  return (
    <PageLayout title="Categorias">
      <CategoriesTable baseCategories={categories} />
    </PageLayout>
  )
}
