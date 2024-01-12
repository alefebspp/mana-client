'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'
import Button from '../Button'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  onClose?: () => void
  onOk: () => Promise<void>
  children: React.ReactNode
  rootPath: string
}

export default function Dialog({ onClose, onOk, rootPath, children }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [willUnmoumt, setWillUnmount] = useState(false)
  const searchParams = useSearchParams()
  const { push } = useRouter()
  const dialogRef = useRef<null | HTMLDialogElement>(null)
  const showDialog = searchParams.get('showDialog')

  useEffect(() => {
    if (showDialog === 'y') {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [showDialog])

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

  const clickOk = async () => {
    setIsLoading(true)
    await onOk()
    setIsLoading(false)
    closeDialog()
  }

  const dialog: JSX.Element | null =
    showDialog === 'y' ? (
      <dialog
        ref={dialogRef}
        className={cn(
          'fixed top-[35%] left-0 right-0 mx-auto animate-slideIn z-10 rounded-xl backdrop:bg-gray-800/50 flex justify-center items-center',
          {
            'animate-slideOut': willUnmoumt
          }
        )}
      >
        <div className="w-[500px] max-w-full flex flex-col p-3">
          <div className="flex flex-row justify-between items-center mb-4 py-2 border-b border-gray-300">
            <h1 className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#b393d3] to-[#553c9a]">
              Confirmação
            </h1>
            <Button
              onClick={closeDialog}
              variant="ghost"
              size="icon"
              className=" hover:bg-gray-200 bg-white transition-all ease-in-out duration-[800ms] rounded-full p-1"
            >
              <X className="w-5 h-5 text-gray-dark" />
            </Button>
          </div>
          <div>
            {children}
            <div className="flex flex-row justify-end gap-4 mt-5">
              <Button
                onClick={closeDialog}
                className="text-xs text-white bg-gray-500 rounded-3xl px-4"
                size="sm"
              >
                Não
              </Button>
              <Button
                size="sm"
                onClick={clickOk}
                className="text-xs rounded-3xl px-4"
                isLoading={isLoading}
              >
                Sim
              </Button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null

  return dialog
}
