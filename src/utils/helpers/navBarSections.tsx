import {
  LayoutDashboard,
  AlignJustify,
  Archive,
  Component,
  Church,
  Plus
} from 'lucide-react'
import { NavBarSectionProps } from '@/components/NavBar/NavBarSection'

const navBarSections: NavBarSectionProps[] = [
  {
    label: 'Início',
    icon: LayoutDashboard,
    path: '/home'
  },
  {
    label: 'Categorias',
    icon: Component,
    path: '/categories',
    childrenSections: [
      { path: '', label: 'Lista', icon: AlignJustify },
      {
        path: '/categories?showModal=y',
        label: 'Criar',
        openModal: true
      },
      { path: '/excluded', label: 'Excluídas', icon: Archive }
    ]
  },
  {
    label: 'Igrejas',
    icon: Church,
    path: '/churchs',
    childrenSections: [
      { path: '', label: 'Lista', icon: AlignJustify },
      {
        path: '/create',
        label: 'Criar',
        icon: Plus
      },
      { path: '/excluded', label: 'Excluídas', icon: Archive }
    ]
  }
]

export default navBarSections
