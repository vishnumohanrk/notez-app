'use client';

import * as RadixPopover from '@radix-ui/react-popover';
import { twMerge } from 'tailwind-merge';

type PopoverProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  contentClassName?: string;
};

export function Popover({ children, trigger, contentClassName }: PopoverProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          align="end"
          className={twMerge(
            contentClassName,
            'will-change-transform animate-in fade-in slide-in-from-top-1/2 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-1/2'
          )}
        >
          {children}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
