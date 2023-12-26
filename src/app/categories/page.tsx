import PageLayout from '@/layouts/PageLayout'

import { PenSquare, Trash2 } from 'lucide-react'

export default function Categories() {
  return (
    <PageLayout title="Categorias">
      <div className="relative overflow-y-auto pt-sm">
        <table className="w-full text-xs xl:text-sm text-left rtl:text-right text-gray-dark">
          <thead className="text-xs text-gray-dark uppercase bg-purple-light">
            <tr>
              <th scope="col" className="px-6 py-3 w-[60%]">
                descrição
              </th>
              <th scope="col" className="px-6 py-3 w-[20%]">
                natureza
              </th>
              <th scope="col" className="px-6 py-3 w-[20%]">
                ação
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-purple-light">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-dark whitespace-nowrap"
              >
                1. Receitas
              </th>
              <td className="px-6 py-4">Contribuição</td>
              <td className="px-6 py-4 flex items-center gap-4">
                <Trash2 className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
                <PenSquare className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
              </td>
            </tr>
            <tr className="bg-white border-b border-purple-light">
              <th scope="row" className="px-6 py-4 font-medium text-gray-dark">
                2. Despesas
              </th>
              <td className="px-6 py-4">Despesa</td>
              <td className="px-6 py-4 flex items-center gap-4">
                <Trash2 className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
                <PenSquare className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageLayout>
  )
}
