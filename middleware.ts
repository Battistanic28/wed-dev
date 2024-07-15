import { NextRequest, NextResponse } from 'next/server';

const sharedPassword = process.env.NEXT_PUBLIC_SECRET;

export function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const url = nextUrl.clone();

  const cookiePassword = cookies.get('password');

  if (cookiePassword?.value === sharedPassword) {
    return NextResponse.next();
  }

  url.pathname = '/auth';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/',
    '/story',
    '/rsvp',
    '/schedule',
    '/resources',
    '/registry',
    '/contact',
  ],
};
