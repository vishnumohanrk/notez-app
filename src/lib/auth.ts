import 'server-only';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { db } from './db';

if (
  !process.env.NEXTAUTH_SECRET ||
  !process.env.GOOGLE_CLIENT_ID ||
  !process.env.GOOGLE_CLIENT_SECRET
) {
  throw new Error('Missing Auth env vars');
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user }) {
      // console.log('jwt cb');

      if (user) {
        token.id = user.id;
      }

      return token;
    },

    async session({ token, session }) {
      // console.log('session cb');

      if (token) {
        session.user.id = token.id;
      }

      return session;
    },
  },

  theme: {
    colorScheme: 'dark',
  },
};
