import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { Database } from './lib/db-types';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const { pathname } = req.nextUrl;

  const supabase = createMiddlewareSupabaseClient<Database>({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isLoggedIn = !!session?.user.email;
  const isAuthPage = pathname === '/login';

  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (isAuthPage || isLoggedIn) {
    return res;
  }

  return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
