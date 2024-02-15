import { cookies } from 'next/headers'
import { Church, ChurchEvent } from './types'

interface GetChurchsParams {
  onlyHidden: boolean
}

const token = cookies().get('@mana-token')?.value
const headerAuthorization = {
  Authorization: `Bearer ${token}`
}

export async function getChurchs({
  onlyHidden
}: GetChurchsParams): Promise<{ data: Church[] }> {
  let url = `${process.env.API_BASE_URL}/churchs`

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

export async function getChurchsEvents(
  churchId: string
): Promise<{ data: ChurchEvent[] }> {
  const url = `${process.env.API_BASE_URL}/churchEvents/${churchId}`

  const response = await fetch(url, {
    headers: {
      ...headerAuthorization
    },
    cache: 'no-store'
  })

  return await response.json()
}
