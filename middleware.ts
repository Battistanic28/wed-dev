import { NextResponse, NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
  const secret = process.env.SECRET;
  const cookieStore = cookies();
  const isAuthorized = cookieStore.get('secret') === secret;
  console.log(isAuthorized);
  // hardcodeed authorized
  if (!isAuthorized) {
    return;
  }

  return NextResponse.redirect(new URL('/signin', request.url));
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
