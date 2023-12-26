import { SelectHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { cn } from '@/lib/utils'

type SelectRootProps = SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string
  name: string
  register?: UseFormRegister<any>
}

export default function SelectRoot({
  name,
  register,
  placeholder,
  ...props
}: SelectRootProps) {
  return (
    <select
      defaultValue=""
      className={cn(
        'border border-gray-dark form-select block w-full px-2 py-2 text-base text-[0.8rem] font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid rounded transition ease-in-out m-0  focus:bg-white focus:border-purple-primary focus:outline-none'
      )}
      {...register?.(name)}
      {...props}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      <option value="laranja">Laranja</option>
    </select>
  )
}
