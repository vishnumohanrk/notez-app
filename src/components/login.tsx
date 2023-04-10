'use client';

import { signIn, signOut } from 'next-auth/react';

export function Login({ isLoggedin }: { isLoggedin: boolean }) {
  function handleClick() {
    isLoggedin ? signOut() : signIn('auth0');
  }

  return (
    <button type="button" onClick={handleClick}>
      Sign {isLoggedin ? 'Out' : 'In'}
    </button>
  );
}
