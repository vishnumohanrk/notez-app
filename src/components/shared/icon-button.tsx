import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type IconButtonProps = {
  asChild?: boolean;
} & React.ComponentPropsWithRef<'button'>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, type, asChild = false, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        {...rest}
        ref={ref}
        type={type || 'button'}
        className={twMerge(
          'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-700 disabled:cursor-not-allowed disabled:opacity-60',
          className
        )}
      />
    );
  }
);

IconButton.displayName = 'IconButton';
