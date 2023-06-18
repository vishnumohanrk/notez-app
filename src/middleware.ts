import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const REDIR_KEY = 'from';
const AUTH_PAGE = '/login';

export default withAuth(
  async function middleware(req) {
    const url = req.nextUrl;
    const authed = !!req.nextauth.token;

    if (url.pathname.includes(AUTH_PAGE)) {
      if (authed) {
        const redirectTo = url.searchParams.get(REDIR_KEY);
        return NextResponse.redirect(new URL(redirectTo || '/', req.url));
      } else {
        return;
      }
    }

    if (!authed) {
      const redirectURL = new URL(AUTH_PAGE, req.url);
      redirectURL.searchParams.set(REDIR_KEY, url.pathname);

      return NextResponse.redirect(redirectURL);
    }
  },
  {
    callbacks: {
      async authorized() {
        // handle logic in above fn
        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/', '/note/:id*', '/login'],
};
