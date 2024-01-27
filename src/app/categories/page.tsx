import Dialog from '@/components/Dialog'
import CategoriesTable from '@/components/Tables/CategoriesTable'
import CreateCategoryForm from '@/components/Forms/CreateCategory'
import Modal from '@/components/Modal'

import { fetchCategories } from '@/services/categories'
import { updateCategory } from '@/lib/actions/categories'

export default async function Categories({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const categories = await fetchCategories({ onlyHidden: false })

  const targetCategory = categories.find(
    (category) => category.id == searchParams.ci
  )

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
      <Modal
        title={`${targetCategory ? 'Atualizar' : 'Nova'} categoria`}
        rootPath="/categories"
      >
        <CreateCategoryForm
          atModal
          categoryToUpdate={targetCategory}
          categories={categories}
        />
      </Modal>
      <CategoriesTable baseCategories={categories} />
    </>
  )
}
