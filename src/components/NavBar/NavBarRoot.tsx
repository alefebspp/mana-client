import { PropsWithChildren } from 'react'

function NavBarRoot({ children }: PropsWithChildren) {
  return (
    <nav className="hidden lg:block w-[20rem] h-[100vh] bg-gray-primary border-r-2 border-gray-border">
      <ul className="w-full h-full flex flex-col bg-gray-50">{children}</ul>
    </nav>
  )
}
export default NavBarRoot
