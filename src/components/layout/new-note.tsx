import { Plus } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export function NewNote({ variant }: { variant: 'full' | 'floating' }) {
  return (
    <Link
      href="/note/new"
      className={twMerge(
        'inline-flex h-14 items-center bg-indigo-700 font-medium transition-colors hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 focus:ring-offset-neutral-950',
        variant === 'floating'
          ? 'fixed bottom-4 right-4 z-50 inline-flex w-14 justify-center rounded-full lg:left-[19.4rem]'
          : 'w-full rounded-md font-medium'
      )}
    >
      <Plus className={variant === 'floating' ? 'h-7 w-7' : 'ml-4 mr-2.5'} />
      <span className={variant === 'floating' ? 'sr-only' : ''}>New Note</span>
    </Link>
  );
}
