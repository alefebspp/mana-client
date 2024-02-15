'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

interface CreateChurchRequest {
  name: string
  leader: string
  email: string
  cnpj: string
}

interface UpdateChurchRequest {
  name?: string
  leader?: string
  email?: string
  cnpj?: string
}

const token = cookies().get('@mana-token')?.value
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export async function createChurch({
  name,
  leader,
  email,
  cnpj
}: CreateChurchRequest) {
  await fetch(`${process.env.API_BASE_URL}/churchs`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name,
      leader,
      email,
      cnpj
    })
  })

  revalidatePath('/churchs')
}

export async function updateChurch(id: string, data: UpdateChurchRequest) {
  await fetch(`${process.env.API_BASE_URL}/churchs/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(data),
    cache: 'no-store'
  })

  revalidatePath('/churchs')
}

export async function setSelectedChurchIdCookie(churchId: string) {
  cookies().set('@selected-church-id', churchId)
}
