import { InputHTMLAttributes, PropsWithChildren } from 'react'
import { AlertCircle } from 'lucide-react'
import { useField } from 'formik'
import { cn } from '@/lib/utils'

interface InputContainerProps extends PropsWithChildren {
  className?: string
}

interface InputRootProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name: string
}

function InputLabel({ children }: PropsWithChildren) {
  return <label className={cn('text-gray-dark text-sm')}>{children}</label>
}

function InputContainer({ children, className }: InputContainerProps) {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}

function InputRoot({ name, ...props }: InputRootProps) {
  const [field, meta] = useField(name)
  return (
    <div className="flex flex-col">
      <input
        className="py-2 px-2 border border-gray-dark rounded-md focus:ring-2 focus:ring-purple-primary focus:border-purple-primary outline-none text-[1rem]"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="flex items-center gap-[0.5rem] mt-[0.5rem] text-xs font-medium text-purple-dark rounded-sm bg-purple-pastel p-[0.5rem]">
          <AlertCircle className="w-4 h-4" />
          {meta.error[0]}
        </div>
      ) : null}
    </div>
  )
}

const Input = {
  Label: InputLabel,
  Container: InputContainer,
  Root: InputRoot
}

export default Input
