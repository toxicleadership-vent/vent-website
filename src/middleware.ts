import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from '../i18nConfig'

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|images|favicon.ico|sw.js).*)',
  ],
}

acceptLanguage.languages(languages)

export async function middleware(req: NextRequest) {
  const isProdReady = process.env.IS_PRODUCTION_READY
  //TODO: take out
  const allowedDomain =
    req.url.includes('localhost') || req.url.includes('vercel')

  if (!allowedDomain && isProdReady === 'false') {
    req.nextUrl.pathname = `/en/under-construction`
    return NextResponse.rewrite(req.nextUrl)
  }

  const password = req.nextUrl.searchParams.get('password')
  const hasCookie = req.cookies.has('password')
  const url = req.nextUrl.clone()
  const response = NextResponse.redirect(url)

  if (req.url.includes('survey')) {
    if (password === process.env.PAGE_PASSWORD && !hasCookie) {
      response.cookies.set('survey', 'true')
    } else {
      req.nextUrl.pathname = `/en/404`
      return NextResponse.rewrite(req.nextUrl)
    }
  }

  let lng
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc: string) =>
      req.nextUrl.pathname.startsWith(`/${loc}`)
    ) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    )
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers?.get('referer') ?? '')
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    )
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
