'use client';

import { usePathname, useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import type { RCProps } from '@/lib/types';

import { SearchBar } from './search-bar';

export function NoteListContainer({ children }: RCProps) {
  const router = useRouter();
  const pathName = usePathname();

  function handleSubmit(val: string) {
    router.push(`/note/search?query=${val}`);
  }

  return (
    <aside
      className={twMerge(
        'sticky top-0 h-screen w-full overflow-y-auto border-r scrollbar-thin scrollbar-thumb-slate-800 lg:w-96',
        pathName.includes('/note') && 'max-lg:hidden'
      )}
    >
      <SearchBar onSubmit={handleSubmit} />
      {children}
    </aside>
  );
}
