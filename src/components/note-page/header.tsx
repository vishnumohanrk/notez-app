import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type HeaderProps = {
  className?: string;
  children: React.ReactNode;
};

export function Header({ children, className }: HeaderProps) {
  return (
    <div className={twMerge('my-4 flex items-center', className)}>
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
