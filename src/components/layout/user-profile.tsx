import { Button } from '../shared/button';
import { IconButton } from '../shared/icon-button';
import { Popover } from '../shared/popover';
import { UserAvatar } from '../shared/user-avatar';

export function UserProfile() {
  const user = {
    name: 'Lorem Ipsum',
    email: 'loremipsum@lorem.com',
    image: 'https://picsum.photos/id/32/100',
  };

  if (!user) return null;

  return (
    <Popover
      contentClassName="my-2 w-[calc(100vw-2rem)] rounded-md border bg-neutral-900 p-4 lg:w-[21.95rem]"
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
        <Button variant="secondary" className="text-sm">
          Sign Out
        </Button>
      </div>
    </Popover>
  );
}
