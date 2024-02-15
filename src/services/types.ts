export type NatureType = 'contribution' | 'expense'

export interface Category {
  id: string
  code: string
  description: string
  nature: NatureType
  belongs_to: string | null
  hidden: boolean
}

export interface Church {
  id: string
  name: string
  leader: string
  email: string
  cnpj: string
}

export interface ChurchEvent {
  id: string
  name: string
  week_day: number
  hour: string
  church_id: string
}
