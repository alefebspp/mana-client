import { Category } from './types'

export async function fetchCategories(): Promise<Category[]> {
  const response = await fetch('http://localhost:3333/categories')
  return await response.json()
}
