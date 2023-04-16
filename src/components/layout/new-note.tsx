import { Plus } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export function NewNote({ variant }: { variant: 'floating' | 'full' }) {
  return (
    <Link
      href="/note/new"
      title="Create New Note"
      className={twMerge(
        'bg-indigo-700 font-medium transition-colors hover:bg-indigo-800 focus:ring-indigo-700 focus-visible:bg-indigo-800',
        variant === 'floating'
          ? 'fixed bottom-4 left-0 translate-x-[calc(100vw-4.5rem)] rounded-full p-3 lg:translate-x-[19.5rem]'
          : 'inline-flex h-12 w-full items-center rounded-md'
      )}
    >
      <Plus className={variant === 'floating' ? 'h-8 w-8' : 'mx-4'} />
      <span className={variant === 'floating' ? 'hidden' : ''}>New Note</span>
    </Link>
  );
}
