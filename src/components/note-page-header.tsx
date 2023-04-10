import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import type { RCProps } from '@/lib/types';

export function NotePageHeader({ children }: RCProps) {
  return (
    <div className="flex items-center">
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
