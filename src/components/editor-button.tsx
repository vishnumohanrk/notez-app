import * as Toolbar from '@radix-ui/react-toolbar';
import type { LucideIcon } from 'lucide-react';

type EditorButtonProps = {
  title: string;
  Icon: LucideIcon;
  disabled?: boolean;
} & (
  | { variant?: 'toggle'; onClick?: never }
  | { variant?: 'button'; onClick: () => void }
);

export function EditorButton({
  Icon,
  title,
  onClick,
  disabled,
  variant = 'toggle',
}: EditorButtonProps) {
  const Comp = variant === 'button' ? Toolbar.Button : Toolbar.ToggleItem;

  return (
    <Comp
      title={title}
      value={title}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex h-12 w-12 items-center justify-center border bg-slate-900 transition-colors first:rounded-l-md last:rounded-r-md focus-visible:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40 data-[state=on]:!bg-blue-900 enabled:hover:bg-slate-700 lg:h-10 lg:w-10 [&:not(:last-child)]:border-r-0"
    >
      <Icon size={22} />
    </Comp>
  );
}
