import { PenSquare, RotateCcw, Trash2 } from 'lucide-react'
import { Category } from '@/services/types'

import { categoryNatureConverter } from '@/utils/converters'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  baseCategories: Category[]
  showHidden?: boolean
}

const CategoriesTable = ({ baseCategories, showHidden }: Props) => {
  return (
    <div className="relative overflow-y-auto">
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
              {showHidden ? 'restaurar' : 'ação'}
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
                    style={{
                      paddingLeft: `${
                        !showHidden ? codeSplit.length - 1 : 0
                      }rem`
                    }}
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
                  {belongs_to ? (
                    <td className="px-6 py-4 flex items-center gap-4">
                      {showHidden ? (
                        <Link
                          id={`restore-${code.split('.').join('-')}`}
                          href={`/categories/excluded?showDialog=y&ci=${id}`}
                        >
                          <RotateCcw className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
                        </Link>
                      ) : (
                        <>
                          <Link
                            id={`delete-${code.split('.').join('-')}`}
                            href={`/categories?showDialog=y&ci=${id}`}
                          >
                            <Trash2 className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
                          </Link>
                          <Link
                            id={`update-${code.split('.').join('-')}`}
                            href={`/categories/${id}`}
                          >
                            <PenSquare className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
                          </Link>
                        </>
                      )}
                    </td>
                  ) : null}
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
