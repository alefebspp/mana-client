import { PropsWithChildren } from 'react'

type Props = PropsWithChildren & {
  title: string
}

export default function PageLayout({ children, title }: Props) {
  return (
    <div className="w-full h-full flex flex-col bg-white p-sm">
      <h1 className="w-fit text-sm md:text-md xl:text-xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#b393d3] to-[#553c9a]">
        {title}
      </h1>
      {children}
    </div>
  )
}
