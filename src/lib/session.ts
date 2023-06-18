import 'server-only';

import { getServerSession } from 'next-auth/next';

import { authOptions } from '@/lib/auth';

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export async function getAuthUserId() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error('Unauthorised');
  }

  return user.id;
}
