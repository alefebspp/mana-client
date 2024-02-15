'use client'
import { cn } from '@/lib/utils'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

import Button from '../Button'

type Props = {
  closeModal: () => void
  modalIsOpen: boolean
} & PropsWithChildren

export default function ClientModal({
  closeModal,
  modalIsOpen,
  children
}: Props) {
  const [willUnmoumt, setWillUnmount] = useState(false)

  const dialogRef = useRef<null | HTMLDialogElement>(null)

  const closeDialog = () => {
    setWillUnmount(true)
    setTimeout(() => {
      setWillUnmount(false)
      dialogRef.current?.close()
      closeModal()
    }, 250)
  }

  useEffect(() => {
    if (modalIsOpen) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [modalIsOpen])

  return modalIsOpen ? (
    <dialog
      ref={dialogRef}
      className={cn(
        'fixed my-auto left-0 right-0 mx-auto animate-slideIn z-10 rounded-xl backdrop:bg-gray-800/50 flex justify-center items-center',
        {
          'animate-slideOut': willUnmoumt
        }
      )}
    >
      <div className="w-[500px] max-w-full flex flex-col p-3">
        <div className="flex flex-row justify-between items-center pt-2">
          <Button
            onClick={closeDialog}
            variant="ghost"
            size="icon"
            className="ml-auto hover:bg-gray-200 bg-white transition-all ease-in-out duration-[800ms] rounded-full p-1"
          >
            <X className="w-5 h-5 text-gray-dark" />
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </dialog>
  ) : null
}
