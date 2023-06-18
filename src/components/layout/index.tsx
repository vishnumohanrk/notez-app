'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { ScrollArea } from '../shared/scroll-area';

type MainLayoutProps = {
  navBar: React.ReactNode;
  children: React.ReactNode;
};

export function MainLayout({ children, navBar }: MainLayoutProps) {
  const pathName = usePathname();

  const styles = useMemo(() => {
    return {
      aside: `!sticky top-0 h-[100dvh] w-full shrink-0 lg:w-96 lg:border-r ${
        pathName.includes('/note') ? 'max-lg:hidden' : ''
      }`,

      main: `mx-auto max-w-screen-xl grow p-4 ${
        pathName.includes('/note') ? '' : 'max-lg:hidden'
      }`,
    };
  }, [pathName]);

  return (
    <div className="flex">
      <ScrollArea className={styles.aside}>{navBar}</ScrollArea>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
