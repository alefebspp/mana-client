import Dialog from '@/components/Dialog'
import ChurchsTable from '@/components/Tables/ChurchsTable'

import { updateCategory } from '@/lib/actions/categories'
import { getChurchs } from '@/services/churchs'

export default async function Churchs({
  searchParams
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const churchs = await getChurchs({ onlyHidden: false })

  async function handleHideCategory() {
    'use server'
    if (searchParams.ci) {
      await updateCategory(searchParams.ci, { hidden: true })
    }
  }
  return (
    <>
      <Dialog rootPath="/churchs" onOk={handleHideCategory}>
        <p className="text-sm md:text-md">
          Tem certeza que deseja excluir essa igreja?
        </p>
      </Dialog>
      <ChurchsTable churchs={churchs.data} />
    </>
  )
}
