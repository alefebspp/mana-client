import { ElementType, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { AlertCircle, XCircle } from 'lucide-react'

export const alertVariants = cva(
  'w-full flex items-start gap-3 text-xs font-medium p-3',
  {
    variants: {
      variant: {
        default: 'text-purple-primary bg-purple-light',
        error: 'border-t-2 border-red-500 text-red-500 bg-red-200'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export type AlertRootProps = PropsWithChildren &
  VariantProps<typeof alertVariants> & {
    className?: string
  }

export default function AlertRoot({
  children,
  className,
  variant
}: AlertRootProps) {
  let Icon: ElementType = AlertCircle
  let iconClass = 'w-4 h-4'

  if (variant == 'error') {
    Icon = XCircle
    iconClass = 'w-6 h-6'
  }
  return (
    <div
      data-testid="alert-root"
      className={cn(alertVariants({ variant, className }))}
    >
      <Icon className={iconClass} />
      {children}
    </div>
  )
}
