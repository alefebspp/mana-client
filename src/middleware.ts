import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const token = cookies().get('@mana-token')?.value

  if (token) {
    requestHeaders.set('authorization', `Bearer ${token}`)
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  return response
}

export const config = {
  matcher: ['/categories/:path*', '/churchs/:path*']
}
