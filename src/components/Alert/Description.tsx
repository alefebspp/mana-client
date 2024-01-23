import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

type Props = PropsWithChildren & {
  classname?: string
}

export default function AlertDescription({ children, classname }: Props) {
  return <span className={cn('text-xs', classname)}>{children}</span>
}
