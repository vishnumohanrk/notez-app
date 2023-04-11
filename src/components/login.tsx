'use client';

import { signIn } from 'next-auth/react';

export default function Login({ text = '' }) {
  function login() {
    signIn('auth0', { callbackUrl: '/' });
  }

  return (
    <button
      type="button"
      onClick={login}
      className="button bg-indigo-700 focus:ring-indigo-700 focus-visible:bg-indigo-800 hover:bg-indigo-800"
    >
      {text || 'Log In'}
    </button>
  );
}
