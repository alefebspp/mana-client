'use server'

import { NatureType } from '@/services/types'
import { revalidatePath } from 'next/cache'

interface CreateCategoryRequest {
  description: string
  nature: NatureType
  belongs_to: string | null
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
