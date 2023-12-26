import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

type SelectContainerProps = PropsWithChildren & {
  className?: string
}

export default function SelectContainer({
  children,
  className
}: SelectContainerProps) {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}
