import {
  LayoutDashboard,
  AlignJustify,
  Archive,
  Component,
  Church,
  Plus
} from 'lucide-react'
import { NavBarSectionProps } from '@/components/NavBar/NavBarSection'

export const sectionsInfos = {
  home: {
    label: 'Início',
    path: '/home'
  },
  categories: {
    label: 'Categorias',
    path: '/categories'
  },
  churchs: {
    label: 'Igrejas',
    path: '/churchs'
  }
}

const navBarSections: NavBarSectionProps[] = [
  {
    label: sectionsInfos.home.label,
    icon: LayoutDashboard,
    path: sectionsInfos.home.path
  },
  {
    label: sectionsInfos.categories.label,
    icon: Component,
    path: sectionsInfos.categories.path,
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
    label: sectionsInfos.churchs.label,
    icon: Church,
    path: sectionsInfos.churchs.path,
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
