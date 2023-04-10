'use client';

import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import type { RCProps } from '@/lib/types';

export function NotePageContainer({ children }: RCProps) {
  const pathName = usePathname();

  return (
    <main
      className={twMerge(
        'relative mx-auto max-w-screen-xl flex-1 p-4',
        !pathName.includes('/note') && 'max-lg:hidden'
      )}
    >
      {children}
    </main>
  );
}
