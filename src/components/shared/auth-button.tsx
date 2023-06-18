'use client';

import { signIn, signOut } from 'next-auth/react';

import { Button } from '@/components/shared/button';

export function SignIn({ children }: { children: React.ReactNode }) {
  function handleClick() {
    signIn('google');
  }

  return (
    <Button variant="secondary" onClick={handleClick}>
      {children}
    </Button>
  );
}

export function SignOut() {
  function handleClick() {
    signOut();
  }

  return (
    <Button variant="secondary" onClick={handleClick} className="h-10">
      Sign Out
    </Button>
  );
}
