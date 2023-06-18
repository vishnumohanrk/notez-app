import { twMerge } from 'tailwind-merge';

type Props = {
  name: string;
  label: string;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'name' | 'placeholder'>;

export function FormInput({ name, label, className, ...rest }: Props) {
  return (
    <>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        {...rest}
        required
        id={name}
        name={name}
        placeholder={label}
        className={twMerge(
          'h-12 w-full rounded-md bg-neutral-800 focus:bg-transparent focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-950',
          className
        )}
      />
    </>
  );
}
