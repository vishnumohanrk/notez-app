import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { redirect } from 'next/navigation';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

import { db } from './db';

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      issuer: process.env.AUTH0_ISSUER,
      clientId: process.env.AUTH0_CLIENT_ID || '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
    }),
  ],

  adapter: PrismaAdapter(db),
};

export async function getUser() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return session.user;
}
