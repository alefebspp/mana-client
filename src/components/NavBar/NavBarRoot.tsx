import { PropsWithChildren } from 'react'

function NavBarRoot({ children }: PropsWithChildren) {
  return (
    <nav className="hidden lg:block w-[14rem] xl:w-[18rem] 2xl:w-[20rem] h-[100vh] border-r-2 border-gray-border">
      <ul className="w-full h-full flex flex-col">{children}</ul>
    </nav>
  )
}
export default NavBarRoot
