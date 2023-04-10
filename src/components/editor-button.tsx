import * as Toggle from '@radix-ui/react-toggle';
import * as Toolbar from '@radix-ui/react-toolbar';
import type { LucideIcon } from 'lucide-react';

type EditorButtonProps = {
  title: string;
  Icon: LucideIcon;
  disabled?: boolean;
  onPress: () => void;
} & (
  | { variant?: 'button'; active?: never }
  | { variant?: 'toggle'; active: boolean }
);

export function EditorButton({
  Icon,
  title,
  active,
  onPress,
  disabled,
  variant = 'toggle',
}: EditorButtonProps) {
  if (variant === 'button') {
    return (
      <Toolbar.Button
        title={title}
        onClick={onPress}
        disabled={disabled}
        className={className}
      >
        <Icon size={22} />
      </Toolbar.Button>
    );
  }

  return (
    <Toggle.Toggle
      asChild
      title={title}
      pressed={active}
      disabled={disabled}
      className={className}
      onPressedChange={onPress}
    >
      <Toolbar.Button>
        <Icon size={22} />
      </Toolbar.Button>
    </Toggle.Toggle>
  );
}

const className =
  'inline-flex h-12 w-12 items-center justify-center border bg-slate-900 transition-colors first:rounded-l-md last:rounded-r-md focus-visible:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40 data-[state=on]:!bg-indigo-800 enabled:hover:bg-slate-700 lg:h-10 lg:w-10 [&:not(:last-child)]:border-r-0';
