import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function HomeLink({ variant = 'full' }: { variant?: 'icon' | 'full' }) {
  return (
    <Link
      href="/"
      className="inline-flex h-12 w-12 items-center justify-center underline"
    >
      <ArrowLeft className="h-6 w-6" />
      <span>Go Home</span>
    </Link>
  );
}
