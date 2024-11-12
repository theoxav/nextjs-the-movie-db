import { getLocaleUrlToRedirect } from '@/services/i18n';
import { NextResponse } from 'next/server';

export function middleware(request) {
  const newLocaleUrl = getLocaleUrlToRedirect(request);

  if (newLocaleUrl) {
    return NextResponse.redirect(newLocaleUrl);
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
