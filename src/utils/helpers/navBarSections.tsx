import { Bookmark, Home } from 'lucide-react'
import { NavBarSectionProps } from '@/components/NavBar/NavBarSection'

const navBarSections: NavBarSectionProps[] = [
  {
    label: 'Início',
    icon: Home,
    path: '/home'
  },
  {
    label: 'Categorias',
    icon: Bookmark,
    path: '/categories',
    childrenSections: [
      { path: '', label: 'Início' },
      { path: '/create', label: 'Novo' }
    ]
  }
]

export default navBarSections
