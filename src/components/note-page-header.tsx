import clsx from 'clsx';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import type { RCProps } from '@/lib/types';

type NotePageHeaderProps = RCProps & {
  className?: string;
};

export function NotePageHeader({ children, className }: NotePageHeaderProps) {
  return (
    <div className={clsx('flex items-center', className)}>
      <Link
        href="/"
        className="inline-flex h-12 w-12 items-center underline lg:hidden"
      >
        <ArrowLeft size={32} />
        <span className="sr-only">Back</span>
      </Link>
      {children}
    </div>
  );
}
