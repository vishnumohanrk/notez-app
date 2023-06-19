import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type FormInputProps = {
  name: string;
  label: string;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'name' | 'placeholder'>;

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ name, label, className, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
        <input
          {...rest}
          required
          ref={ref}
          id={name}
          name={name}
          placeholder={label}
          className={twMerge(
            'h-12 w-full rounded-md bg-neutral-800 focus:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-950',
            className
          )}
        />
      </>
    );
  }
);

FormInput.displayName = 'FormInput';
