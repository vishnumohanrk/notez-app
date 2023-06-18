'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type ActiveLinkProps = {
  className: string;
  activeClassName: string;
  children: React.ReactNode;
  href: React.ComponentProps<typeof Link>['href'];
};

export function ActiveLink({
  href,
  children,
  className,
  activeClassName,
}: ActiveLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={twMerge(className, pathName === href && activeClassName)}
    >
      {children}
    </Link>
  );
}
