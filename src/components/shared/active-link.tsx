'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type ActiveLinkProps = React.ComponentProps<typeof Link> & {
  activeClassName?: string;
};

export function ActiveLink({
  href,
  className,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      {...rest}
      href={href}
      className={twMerge(className, pathName === href && activeClassName)}
    />
  );
}
