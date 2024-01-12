'use server'

import { NatureType } from '@/services/types'
import { revalidatePath } from 'next/cache'

interface CreateCategoryRequest {
  description: string
  nature: NatureType
  belongs_to: string | null
}
interface UpdateCategoryRequest {
  description?: string
  nature?: NatureType
  belongs_to?: string
  hidden?: boolean
}

export async function createCategory({
  description,
  nature,
  belongs_to
}: CreateCategoryRequest) {
  await fetch('http://localhost:3333/categories', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      description,
      nature,
      belongs_to
    })
  })

  revalidatePath('/categories/create')
}

export async function updateCategory(id: string, data: UpdateCategoryRequest) {
  await fetch(`http://localhost:3333/categories/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...data
    })
  })

  revalidatePath('/categories')
  revalidatePath('/categories/create')
}
