import { ErrorMessage } from '@hookform/error-message'

import Alert from '../Alert'
import { cn } from '@/lib/utils'

export interface InputErrorProps {
  errors: Record<string, any>
  name: string
  className?: string
}

export default function InputError({
  errors,
  name,
  className
}: InputErrorProps) {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      message={errors[name]?.message}
      render={({ message }) => (
        <Alert.Root className={cn('mt-2', className)}>
          <Alert.Description>{message}</Alert.Description>
        </Alert.Root>
      )}
    />
  )
}
