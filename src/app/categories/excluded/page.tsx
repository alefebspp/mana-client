export const dynamic = 'force-dynamic'

import Dialog from '@/components/Dialog'
import CategoriesTable from '@/components/Tables/CategoriesTable'
import { updateCategory } from '@/lib/actions/categories'

import { fetchCategories } from '@/services/categories'

export default async function ExcludedCategories({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const categories = await fetchCategories({ onlyHidden: true })

  async function handleRestoreCategory() {
    'use server'
    if (searchParams.ci) {
      await updateCategory(searchParams.ci, { hidden: false })
    }
  }

  return (
    <>
      <Dialog rootPath="/categories/excluded" onOk={handleRestoreCategory}>
        <p className="text-sm md:text-md">
          Tem certeza que deseja restaurar essa categoria?
        </p>
      </Dialog>
      <CategoriesTable showHidden baseCategories={categories} />
    </>
  )
}
