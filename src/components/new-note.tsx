import clsx from 'clsx';
import { Plus } from 'lucide-react';
import Link from 'next/link';

type Props = {
  variant: 'floating' | 'full';
};

export function NewNote({ variant }: Props) {
  return (
    <Link
      href="/note/new"
      title="Create New Note"
      className={clsx(
        'bg-indigo-700 font-medium transition-colors focus:ring-indigo-700 focus-visible:bg-indigo-800 hover:bg-indigo-800',
        variant === 'floating'
          ? 'fixed bottom-4 left-0 translate-x-[calc(100vw-5rem)] rounded-full p-3 lg:translate-x-[19rem]'
          : 'inline-flex h-12 w-full items-center rounded-md'
      )}
    >
      <Plus className={variant === 'floating' ? 'h-8 w-8' : 'mx-4'} />
      <span className={variant === 'floating' ? 'sr-only' : ''}>New Note</span>
    </Link>
  );
}
