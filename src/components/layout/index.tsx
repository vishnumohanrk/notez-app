'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { ScrollArea } from '../shared/scroll-area';
import { SearchBar } from './search-bar';

type MainLayoutProps = {
  noteList: React.ReactNode;
  children: React.ReactNode;
};

export function MainLayout({ children, noteList }: MainLayoutProps) {
  const pathName = usePathname();

  const styles = useMemo(() => {
    return {
      aside: `!sticky top-0 h-screen w-full overflow-hidden lg:w-96 lg:border-r ${
        pathName.includes('/note') ? 'max-lg:hidden' : ''
      }`,

      main: `mx-auto max-w-screen-xl flex-1 px-4 ${
        pathName.includes('/note') ? '' : 'max-lg:hidden'
      }`,
    };
  }, [pathName]);

  return (
    <div className="flex">
      <ScrollArea rootClassName={styles.aside}>
        <aside className="p-4">
          <SearchBar />
          {noteList}
        </aside>
      </ScrollArea>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
