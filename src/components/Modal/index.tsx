'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'
import Button from '../Button'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  onClose?: () => void
  children: React.ReactNode
  rootPath: string
  title?: string
}

export default function Modal({ onClose, rootPath, title, children }: Props) {
  const [willUnmoumt, setWillUnmount] = useState(false)
  const searchParams = useSearchParams()
  const { push } = useRouter()
  const dialogRef = useRef<null | HTMLDialogElement>(null)
  const showModal = searchParams.get('showModal')

  useEffect(() => {
    if (showModal === 'y') {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [showModal])

  const closeDialog = () => {
    setWillUnmount(true)
    setTimeout(() => {
      setWillUnmount(false)
      dialogRef.current?.close()
      push(rootPath)
      if (onClose) {
        onClose()
      }
    }, 250)
  }

  const dialog: JSX.Element | null =
    showModal === 'y' ? (
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
          <div
            className={cn('flex flex-row justify-between items-center py-2 ', {
              'border-b border-gray-300 mb-4': title
            })}
          >
            {title && (
              <h1 className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#b393d3] to-[#553c9a]">
                {title}
              </h1>
            )}
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

  return dialog
}
