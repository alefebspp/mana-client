import { LayoutDashboard, Plus, AlignJustify, Archive } from 'lucide-react'
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
      { path: '', label: 'Lista', icon: AlignJustify },
      { path: '/create', label: 'Novo', icon: Plus },
      { path: '/excluded', label: 'Excluídas', icon: Archive }
    ]
  }
]

export default navBarSections
