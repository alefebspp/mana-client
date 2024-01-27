'use server'

import { NatureType } from '@/services/types'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

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

const token = cookies().get('@mana-token')?.value
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export async function createCategory({
  description,
  nature,
  belongs_to
}: CreateCategoryRequest) {
  await fetch(`${process.env.API_BASE_URL}/categories`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      description,
      nature,
      belongs_to
    })
  })

  revalidatePath('/categories/create')
}

export async function updateCategory(id: string, data: UpdateCategoryRequest) {
  await fetch(`${process.env.API_BASE_URL}/categories/update/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(data),
    cache: 'no-store'
  })

  revalidatePath('/categories')
  revalidatePath('/categories/create')
}
