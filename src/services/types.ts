export type NatureType = 'contribution' | 'expense'

export interface Category {
  id: string
  code: string
  description: string
  nature: NatureType
  belongs_to: string | null
  hidden: boolean
}
