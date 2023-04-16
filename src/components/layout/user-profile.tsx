import * as Popover from '@radix-ui/react-popover';

import { Button } from '../shared/button';

export function UserProfile() {
  const name = 'Lorem Ipsum';
  const email = 'Lorem Ipsum';
  const image = 'https://picsum.photos/id/32/100';

  return (
    <Popover.Root>
      <Popover.Trigger className="absolute right-0 h-12 px-2">
        <img
          src={image}
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
              src={image}
              alt={`${name} profile pic`}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-lg font-medium">{name}</p>
              <p className="text-sm text-neutral-400">{email}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="secondary" className="text-sm">
              Log Out
            </Button>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
