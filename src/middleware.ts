import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = cookies().get('@mana-token')?.value
  const atLoginPageUrl = request.url === 'http://localhost:3000/'

  if (!token && !atLoginPageUrl) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (token && atLoginPageUrl) {
    return NextResponse.redirect(new URL(`/home`, request.url))
  }
}

export const config = {
  matcher: ['/', '/home', '/categories/:path*', '/churchs/:path*']
}
