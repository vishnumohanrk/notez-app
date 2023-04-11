'use client';

import { signIn } from 'next-auth/react';

export default function Login() {
  function login() {
    signIn('auth0', { callbackUrl: '/' });
  }

  return (
    <button
      type="button"
      onClick={login}
      className="button bg-indigo-800 focus:ring-indigo-800"
    >
      Sign In
    </button>
  );
}
