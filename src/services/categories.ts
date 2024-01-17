import { Category } from './types'

interface FetchCategoriesParams {
  onlyHidden: boolean
}

export async function fetchCategories({
  onlyHidden
}: FetchCategoriesParams): Promise<Category[]> {
  let url = 'http://localhost:3333/categories'

  if (onlyHidden) {
    url = `${url}?hidden=true`
  }

  const response = await fetch(url, { cache: 'no-store' })
  return await response.json()
}

export async function findCategory(id: string): Promise<Category> {
  const response = await fetch(`http://localhost:3333/categories/${id}`, {
    cache: 'no-store'
  })
  return await response.json()
}
