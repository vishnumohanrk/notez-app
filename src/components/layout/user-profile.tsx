import { getCurrentUser } from '@/lib/session';

import { SignOut } from '../shared/auth-button';
import { IconButton } from '../shared/icon-button';
import { Popover } from '../shared/popover';
import { UserAvatar } from '../shared/user-avatar';

export async function UserProfile() {
  const user = await getCurrentUser();

  if (!user) return null;

  return (
    <Popover
      contentClassName="mt-2 w-[calc(100vw-2rem)] rounded-md border bg-neutral-900 p-4 lg:w-[21.95rem]"
      trigger={
        <IconButton className="absolute right-0">
          <UserAvatar {...user} className="h-8 w-8" />
        </IconButton>
      }
    >
      <div className="flex items-center gap-4 font-semibold">
        <UserAvatar {...user} className="h-14 w-14 shrink-0" />
        <div>
          <p className="truncate font-medium">{user.name}</p>
          <p className="truncate text-sm text-neutral-400">{user.email}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <SignOut />
      </div>
    </Popover>
  );
}
