export const dynamic = 'force-dynamic'

import Dialog from '@/components/Dialog'
import CategoriesTable from '@/components/Tables/CategoriesTable'

import { fetchCategories } from '@/services/categories'
import { updateCategory } from '@/lib/actions/categories'

export default async function Categories({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const categories = await fetchCategories({ onlyHidden: false })

  async function handleHideCategory() {
    'use server'
    if (searchParams.ci) {
      await updateCategory(searchParams.ci, { hidden: true })
    }
  }
  return (
    <>
      <Dialog rootPath="/categories" onOk={handleHideCategory}>
        <p className="text-sm md:text-md">
          Tem certeza que deseja excluir essa categoria?
        </p>
      </Dialog>
      <CategoriesTable baseCategories={categories} />
    </>
  )
}
