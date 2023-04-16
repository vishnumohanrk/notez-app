import * as RadixScroll from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';

type ScrollAreaProps = {
  rootClassName: string;
  children: React.ReactNode;
  orientation?: RadixScroll.ScrollAreaScrollbarProps['orientation'];
};

export function ScrollArea({
  children,
  rootClassName,
  orientation = 'vertical',
}: ScrollAreaProps) {
  return (
    <RadixScroll.Root className={rootClassName}>
      <RadixScroll.Viewport className="h-full w-full">
        {children}
      </RadixScroll.Viewport>
      <RadixScroll.Scrollbar
        orientation={orientation}
        className={twMerge(
          'touch-none select-none',
          orientation === 'vertical' && 'w-1.5',
          orientation === 'horizontal' && 'flex h-1.5'
        )}
      >
        <RadixScroll.ScrollAreaThumb className="relative rounded-full bg-neutral-700" />
      </RadixScroll.Scrollbar>
    </RadixScroll.Root>
  );
}
