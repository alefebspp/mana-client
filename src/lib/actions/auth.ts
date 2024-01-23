'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface LoginRequest {
  email: string
  password: string
}

export async function login({ email, password }: LoginRequest): Promise<{
  message?: string
}> {
  const response = await fetch('http://localhost:3333/sessions', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    }),
    cache: 'no-store'
  })

  if (response.status == 400) {
    return {
      message: 'Email ou senha incorreta'
    }
  }

  const { token } = await response.json()

  cookies().set('@mana-token', token)
  redirect('/home')
}
