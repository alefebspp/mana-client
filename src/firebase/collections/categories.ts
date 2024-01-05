import { db } from '../firestore/db'
import { collection } from 'firebase/firestore'

export const categoriesCollection = collection(db, 'categories')

export type NatureType = 'contribution' | 'expense'

export interface Category {
  code: string
  description: string
  nature: NatureType
  user_id: string | null
  belongs_to: string | null
  id: string
}
