import { ErrorMessage } from '@hookform/error-message'
import { AlertCircle } from 'lucide-react'

import { cn } from '@/lib/utils'

export type SelectErrorProps = {
  errors: Record<string, any>
  name: string
  className?: string
}

export default function SelectError({
  errors,
  name,
  className
}: SelectErrorProps) {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      message={errors[name]?.message}
      render={({ message }) => (
        <div
          className={cn(
            'flex items-center gap-[0.5rem] mt-[0.5rem] text-xs font-medium text-purple-primary rounded-sm bg-purple-light p-[0.5rem]',
            className
          )}
        >
          <AlertCircle className="w-4 h-4" />
          {message}
        </div>
      )}
    />
  )
}
