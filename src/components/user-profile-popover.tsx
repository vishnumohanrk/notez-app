/* eslint-disable @next/next/no-img-element */
'use client';

import * as Popover from '@radix-ui/react-popover';
import type { User } from 'next-auth';
import { signOut } from 'next-auth/react';

export function UserProfilePopover({ email, image, name }: Omit<User, 'id'>) {
  function logOut() {
    signOut({ callbackUrl: '/login' });
  }

  if (!image) return null;

  return (
    <Popover.Root>
      <Popover.Trigger className="absolute right-4 h-12 px-2">
        <img
          src={image}
          alt={`${name} profile pic`}
          className="h-8 w-8 rounded-full"
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          className="mt-2 w-[calc(100vw-2.5rem)] rounded-md border bg-slate-800 p-4 lg:w-[21.5rem]"
        >
          <div className="flex gap-4 font-semibold">
            <img
              src={image}
              alt={`${name} profile pic`}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-lg font-medium">{name}</p>
              <p className="text-sm text-slate-400">{email}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={logOut}
              className="rounded-md border bg-slate-900 px-4 py-1 hover:bg-slate-700"
            >
              Log Out
            </button>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
