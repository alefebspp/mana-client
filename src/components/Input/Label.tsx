import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  className?: string
}

export default function InputLabel({ children, className }: Props) {
  return (
    <label
      className={cn(
        'text-gray-dark text-xs xl:text-sm font-semibold',
        className
      )}
    >
      {children}
    </label>
  )
}
