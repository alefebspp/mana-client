import { PropsWithChildren } from 'react'

function InputLabel({ children }: PropsWithChildren) {
  return <label className="text-gray-dark">{children}</label>
}

function InputContainer({ children }: PropsWithChildren) {
  return <div className="flex flex-col">{children}</div>
}

function InputRoot() {
  return (
    <input className="py-1 px-2 border border-gray-dark rounded-md focus:ring-2 focus:ring-purple-primary focus:border-purple-primary outline-none" />
  )
}

const Input = {
  Label: InputLabel,
  Container: InputContainer,
  Root: InputRoot
}

export default Input
