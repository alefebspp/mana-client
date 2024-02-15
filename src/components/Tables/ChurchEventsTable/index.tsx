import { PenSquare, Trash2 } from 'lucide-react'
import { ChurchEvent } from '@/services/types'

import Link from 'next/link'

type Props = {
  events: ChurchEvent[]
}

const ChurchEventsTable = ({ events }: Props) => {
  return (
    <div className="relative overflow-y-auto">
      <table className="w-full text-xs xl:text-sm text-left rtl:text-right text-gray-dark">
        <thead className="text-xs text-gray-dark uppercase bg-purple-light">
          <tr>
            <th scope="col" className="px-6 py-3 w-[25%]">
              evento
            </th>
            <th scope="col" className="px-6 py-3 w-[25%]">
              dia da semana
            </th>
            <th scope="col" className="px-6 py-3 w-[25%]">
              horário
            </th>
            <th scope="col" className="px-6 py-3 w-[25%]">
              ação
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map(({ id, name, week_day, hour }) => {
            return (
              <tr key={id} className="bg-white border-b border-purple-light">
                <th
                  scope="row"
                  className="px-6 py-4 font-normal text-gray-dark whitespace-nowrap"
                >
                  {name}
                </th>
                <td className="px-6 py-4">{week_day}</td>
                <td className="px-6 py-4">{hour}</td>

                <td className="px-6 py-4 flex items-center gap-4">
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
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ChurchEventsTable
