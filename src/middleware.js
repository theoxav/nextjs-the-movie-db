import { getLocaleUrlToRedirect } from '@/services/i18n';
import { NextResponse } from 'next/server';
import withAuth from 'next-auth/middleware';

export function middleware(request) {
  const newLocaleUrl = getLocaleUrlToRedirect(request);

  if (newLocaleUrl) {
    return NextResponse.redirect(newLocaleUrl);
  }

  if (/\/[a-z]{2}\/user.*/.test(request.nextUrl.pathname)) {
    return withAuth(request);
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
