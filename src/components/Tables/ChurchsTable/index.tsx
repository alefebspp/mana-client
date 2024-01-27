import { PenSquare, RotateCcw, Trash2 } from 'lucide-react'
import { Church } from '@/services/types'

import Link from 'next/link'

type Props = {
  churchs: Church[]
  showHidden?: boolean
}

const ChurchsTable = ({ churchs, showHidden }: Props) => {
  return (
    <div className="relative overflow-y-auto">
      <table className="w-full text-xs xl:text-sm text-left rtl:text-right text-gray-dark">
        <thead className="text-xs text-gray-dark uppercase bg-purple-light">
          <tr>
            <th scope="col" className="px-6 py-3 w-[30%]">
              nome
            </th>
            <th scope="col" className="px-6 py-3 w-[30%]">
              líder
            </th>
            <th scope="col" className="px-6 py-3 w-[30%]">
              email
            </th>
            <th scope="col" className="px-6 py-3 w-[10%]">
              {showHidden ? 'restaurar' : 'ação'}
            </th>
          </tr>
        </thead>
        <tbody>
          {churchs.map(({ id, name, leader, email }) => {
            return (
              <tr key={id} className="bg-white border-b border-purple-light">
                <th
                  scope="row"
                  className="px-6 py-4 font-normal text-gray-dark whitespace-nowrap"
                >
                  {name}
                </th>
                <td className="px-6 py-4">{leader}</td>
                <td className="px-6 py-4">{email}</td>

                <td className="px-6 py-4 flex items-center gap-4">
                  {showHidden ? (
                    <Link
                      id={`restore-${name}`}
                      href={`/churchs/excluded?showDialog=y&ci=${id}`}
                    >
                      <RotateCcw className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
                    </Link>
                  ) : (
                    <>
                      <Link
                        id={`delete-${name}`}
                        href={`/churchs?showDialog=y&ci=${id}`}
                      >
                        <Trash2 className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
                      </Link>
                      <Link
                        id={`update-${name}`}
                        href={`/churchs?showModal=y&ci=${id}`}
                      >
                        <PenSquare className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer hover:text-purple-primary" />
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ChurchsTable
