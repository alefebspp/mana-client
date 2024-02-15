import ClientModal from '../ClientModal'
import ChurchsList from '../ChurchsList'

import { Church } from '@/services/types'
import useModalContext from '@/hooks/useModalContext'
import useChurchContext from '@/hooks/useChurchContext'

type Props = {
  churchs: Church[]
}

export default function SelectedChurchBar({ churchs }: Props) {
  const { selectedChurch } = useChurchContext()

  const { modalIsOpen, closeModal, openModal } = useModalContext()

  return (
    <>
      <div className="w-full py-3 flex items-center justify-center bg-purple-primary">
        {!selectedChurch ? (
          <p className="text-white font-semibold text-sm">
            Selecione uma igreja para realizar ações.
            <i onClick={openModal} className="underline cursor-pointer ml-1">
              Selecionar
            </i>
          </p>
        ) : (
          <p className="text-white text-sm">
            <span className="font-semibold">{selectedChurch.name}</span>
            <i onClick={openModal} className="underline cursor-pointer ml-1">
              Trocar igreja
            </i>
          </p>
        )}
      </div>
      <ClientModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <div className="w-full flex flex-col">
          <ChurchsList churchs={churchs} />
        </div>
      </ClientModal>
    </>
  )
}
