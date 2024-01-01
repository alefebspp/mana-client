import { NatureType } from '@/services/types'

export function categoryNatureConverter(nature: NatureType): string {
  const map: Record<NatureType, string> = {
    contribution: 'Contribuição',
    expense: 'Despesas'
  }

  return map[nature]
}
