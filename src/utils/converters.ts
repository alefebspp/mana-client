import { NatureType } from '@/firebase/collections/categories'

export function categoryNatureConverter(nature: NatureType): string {
  const map: Record<NatureType, string> = {
    contribution: 'Contribuição',
    expense: 'Despesas'
  }

  return map[nature]
}
