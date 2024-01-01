import { PenSquare, Trash2 } from 'lucide-react'
import { Category } from '@/services/types'

import { categoryNatureConverter } from '@/utils/converters'
import { cn } from '@/lib/utils'

type Props = {
  baseCategories: Category[]
}

const CategoriesTable = ({ baseCategories }: Props) => {
  return (
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
          {baseCategories.map(
            ({ id, code, description, nature, belongs_to }) => {
              const codeSplit = code.split('.')
              return (
                <tr key={id} className="bg-white border-b border-purple-light">
                  <th
                    style={{ paddingLeft: `${codeSplit.length - 1}rem` }}
                    scope="row"
                    className={cn(
                      'px-6 py-4 font-normal text-gray-dark whitespace-nowrap',
                      {
                        'font-semibold': !belongs_to
                      }
                    )}
                  >
                    {!belongs_to
                      ? `${code}. ${description}`
                      : `${code} ${description}`}
                  </th>
                  <td className="px-6 py-4">
                    {categoryNatureConverter(nature)}
                  </td>
                  <td className="px-6 py-4 flex items-center gap-4">
                    <Trash2 className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
                    <PenSquare className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
                  </td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CategoriesTable
