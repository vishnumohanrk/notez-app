'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import type { RCProps } from '@/lib/types';

export function NotePageContainer({ children }: RCProps) {
  const pathName = usePathname();

  return (
    <main
      className={clsx(
        'relative mx-auto max-w-screen-xl flex-1 p-4',
        !pathName?.includes('/note') && 'max-lg:hidden'
      )}
    >
      {children}
    </main>
  );
}
