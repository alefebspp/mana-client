import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputRootProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name: string
  register?: UseFormRegister<any>
}

export default function InputRoot({
  name,
  register,
  ...props
}: InputRootProps) {
  return (
    <div className="flex flex-col">
      <input
        {...register?.(name)}
        className="py-2 px-2 border border-gray-dark rounded-md focus:border-purple-primary outline-none text-[0.8rem] placeholder:text-gray-500"
        {...props}
      />
    </div>
  )
}
