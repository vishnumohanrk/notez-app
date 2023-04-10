import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function HomeLink() {
  return (
    <Link
      href="/"
      className="inline-flex h-12 w-12 items-center underline lg:hidden"
    >
      <ArrowLeft size={32} />
      <span className="sr-only">Back</span>
    </Link>
  );
}
