'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

import type { RCProps } from '@/lib/types';

import { SearchBar } from './search-bar';

type Props = RCProps & {
  userProfile: React.ReactNode;
};

export function NoteListContainer({ children, userProfile }: Props) {
  const router = useRouter();
  const pathName = usePathname();

  function handleSubmit(val: string) {
    router.push(`/note/search?query=${val}`);
  }

  return (
    <aside
      className={clsx(
        'sticky top-0 h-screen w-full overflow-y-scroll border-r p-4 scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-700 lg:w-96',
        pathName.includes('/note') && 'max-lg:hidden'
      )}
    >
      <SearchBar onSubmit={handleSubmit}>{userProfile}</SearchBar>
      {children}
    </aside>
  );
}
