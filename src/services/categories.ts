import { cookies } from 'next/headers'
import { Category } from './types'

interface FetchCategoriesParams {
  onlyHidden: boolean
}

const token = cookies().get('@mana-token')?.value
const headerAuthorization = {
  Authorization: `Bearer ${token}`
}

export async function fetchCategories({
  onlyHidden
}: FetchCategoriesParams): Promise<Category[]> {
  let url = 'http://localhost:3333/categories'

  if (onlyHidden) {
    url = `${url}?hidden=true`
  }

  const response = await fetch(url, {
    headers: {
      ...headerAuthorization
    },
    cache: 'no-store'
  })
  return await response.json()
}

export async function findCategory(id: string): Promise<Category> {
  const response = await fetch(`http://localhost:3333/categories/${id}`, {
    headers: {
      ...headerAuthorization
    },
    cache: 'no-store'
  })
  return await response.json()
}
