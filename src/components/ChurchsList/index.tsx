import { Church as ChurchIcon } from 'lucide-react'
import { Church } from '@/services/types'
import { cn } from '@/lib/utils'
import useChurchContext from '@/hooks/useChurchContext'

type ItemProps = {
  church: Church
  handleSelect: (church: Church) => void
  selectedChurch: Church
}

type ListProps = {
  churchs: Church[]
}

function ChurchsListItem({ church, handleSelect, selectedChurch }: ItemProps) {
  const isSelected = selectedChurch.id === church.id

  return (
    <button
      onClick={() => handleSelect(church)}
      className={cn(
        'relative appearance-none outline-none w-full p-2 flex items-center gap-2 border border-gray-300 rounded-lg group cursor-pointer hover:bg-purple-primary hover:border-purple-primary',
        {
          'border-purple-primary bg-purple-primary': isSelected
        }
      )}
    >
      <div
        className={cn(
          'w-10 h-10 rounded-full bg-purple-light group-hover:bg-white flex justify-center items-center',
          {
            'bg-white': isSelected
          }
        )}
      >
        <ChurchIcon className="w-6 h-6 text-purple-primary" />
      </div>
      <p
        className={cn('text-sm group-hover:text-white', {
          'text-white': isSelected
        })}
      >
        {church.name}
      </p>
      <p
        className={cn(
          'hidden group-hover:block text-white text-xs font-semibold absolute right-[10px] bottom-0',
          {
            block: isSelected
          }
        )}
      >
        {isSelected ? 'SELECIONADO' : 'SELECIONAR'}
      </p>
    </button>
  )
}

export default function ChurchsList({ churchs }: ListProps) {
  const { selectedChurch, selectChurch } = useChurchContext()

  const handleSelect = (church: Church) => () => {
    selectChurch(church)
  }

  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      {churchs.map((church) => (
        <ChurchsListItem
          selectedChurch={selectedChurch || ({} as Church)}
          handleSelect={handleSelect(church)}
          key={church.id}
          church={church}
        />
      ))}
    </div>
  )
}
