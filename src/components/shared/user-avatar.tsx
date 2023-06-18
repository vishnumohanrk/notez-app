'use client';

import * as Avatar from '@radix-ui/react-avatar';
import type { User } from 'next-auth';

export function UserAvatar({
  name,
  image,
  className,
}: Pick<User, 'image' | 'name'> & { className?: string }) {
  if (!image || !name) return null;

  return (
    <Avatar.Root className={className}>
      <Avatar.Image
        src={image}
        alt={`@${name}`}
        className="h-full w-full rounded-full object-cover"
      />
      <Avatar.Fallback
        delayMs={600}
        className="inline-flex h-full w-full items-center justify-center rounded-full bg-indigo-500"
      >
        {name[0]}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
