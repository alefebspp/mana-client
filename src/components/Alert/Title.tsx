import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

type Props = PropsWithChildren & {
  classname?: string
}

export default function AlertTitle({ children, classname }: Props) {
  return <span className={cn('text-sm font-bold', classname)}>{children}</span>
}
