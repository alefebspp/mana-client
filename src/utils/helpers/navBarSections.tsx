import { Home, LayoutDashboard, PlusCircle } from 'lucide-react'
import { NavBarSectionProps } from '@/components/NavBar/NavBarSection'

const navBarSections: NavBarSectionProps[] = [
  {
    label: 'Início',
    icon: LayoutDashboard,
    path: '/home'
  },
  {
    label: 'Categorias',
    path: '/categories',
    childrenSections: [
      { path: '', label: 'Início', icon: Home },
      { path: '/create', label: 'Novo', icon: PlusCircle }
    ]
  }
]

export default navBarSections
