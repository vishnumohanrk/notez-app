/* eslint-disable @next/next/no-img-element */
import * as Popover from '@radix-ui/react-popover';

import { useUser } from '@/hooks/use-user';

import { Button } from '../shared/button';

export function UserProfile() {
  const { logout, user } = useUser();

  if (!user) return null;

  const { avatar_url, email, name } = user;

  return (
    <Popover.Root>
      <Popover.Trigger className="absolute right-0 h-12 px-2">
        <img
          src={avatar_url}
          alt={`${name} profile pic`}
          className="h-8 w-8 rounded-full"
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          className="mt-2 w-[calc(100vw-2rem)] rounded-md border bg-neutral-900 p-4 lg:w-[22rem]"
        >
          <div className="flex gap-4 font-semibold">
            <img
              src={avatar_url}
              alt={`${name} profile pic`}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="truncate font-medium">{name}</p>
              <p className="truncate text-sm text-neutral-400">{email}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="secondary" className="text-sm" onClick={logout}>
              Log Out
            </Button>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
