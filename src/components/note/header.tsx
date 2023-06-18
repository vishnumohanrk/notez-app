import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { IconButton } from '../shared/icon-button';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function NoteHeader({ children, className }: Props) {
  return (
    <div className={twMerge('mb-4 flex items-center gap-2', className)}>
      <IconButton asChild className="border lg:hidden">
        <Link href="/">
          <ArrowLeft />
          <span className="sr-only">Back</span>
        </Link>
      </IconButton>
      {children}
    </div>
  );
}
