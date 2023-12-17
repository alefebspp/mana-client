import { PropsWithChildren } from 'react'

function NavBarRoot({ children }: PropsWithChildren) {
  return (
    <nav className="w-[20rem] h-[100vh] bg-white">
      <ul className="w-full h-full flex flex-col bg-purple-primary">
        {children}
      </ul>
    </nav>
  )
}
export default NavBarRoot
