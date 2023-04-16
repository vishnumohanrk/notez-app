import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentPropsWithRef<'button'> & {
  variant: 'primary' | 'secondary' | 'danger';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant, className, type = 'button', ...rest } = props;

    const classes = useMemo(() => {
      return twMerge(
        'rounded-md px-8 py-2 font-semibold transition-colors',
        variant === 'primary' &&
          'bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-700 focus-visible:bg-indigo-800',
        variant === 'secondary' &&
          'border hover:bg-neutral-700 focus-visible:bg-neutral-700',
        variant === 'danger' &&
          'bg-red-700 hover:bg-red-800 focus:ring-red-700 focus-visible:bg-red-800',
        className
      );
    }, [className, variant]);

    return <button type={type} ref={ref} className={classes} {...rest} />;
  }
);

Button.displayName = 'CustomButton';
