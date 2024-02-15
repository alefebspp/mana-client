import { useEffect, useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { NavBarSectionProps } from '@/components/NavBar/NavBarSection'
import navBarSections, { sectionsInfos } from '@/utils/helpers/navBarSections'
import useChurchContext from './useChurchContext'

export default function useSections() {
  const [sections, setSections] = useState(navBarSections)
  const { selectedChurch } = useChurchContext()

  const churchEventSections = [
    {
      path: '/events',
      label: 'Eventos',
      icon: CalendarDays
    }
  ]

  useEffect(() => {
    const churchChildrenSection = sections.filter(
      (section) => section.label === sectionsInfos.churchs.label
    )[0].childrenSections

    if (churchChildrenSection) {
      const sectionAlreadyAdded = churchChildrenSection.some(
        (section) => section.label === 'Eventos'
      )
      if (sectionAlreadyAdded) {
        return
      }
    }

    if (selectedChurch) {
      const churchSection = navBarSections.find(
        (section) => section.label == sectionsInfos.churchs.label
      )
      let newSections: NavBarSectionProps[] = navBarSections.filter(
        (section) => section.label !== sectionsInfos.churchs.label
      )

      if (churchSection) {
        churchEventSections.map((section) => {
          churchSection.childrenSections?.push(section)
        })

        newSections = [...newSections, churchSection]
        setSections(newSections)
      }
    }
  }, [selectedChurch])

  return {
    sections
  }
}
