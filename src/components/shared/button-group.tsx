import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

type Props = {
  wrap?: boolean;
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function ButtonGroup({
  children,
  className,
  wrap = true,
  asChild = false,
}: Props) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={twMerge(
        'flex justify-end gap-4',
        wrap && 'max-lg:flex-wrap max-lg:[&>*]:w-full',
        className
      )}
    >
      {children}
    </Comp>
  );
}
