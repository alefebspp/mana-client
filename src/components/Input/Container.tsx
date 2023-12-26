import { PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'

interface InputContainerProps extends PropsWithChildren {
  className?: string
}

export default function InputContainer({
  children,
  className
}: InputContainerProps) {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}
