import { format } from 'date-fns';

type TimeCompProps = {
  date: Date;
  className?: string;
};

export function Time({ date, className }: TimeCompProps) {
  return <time className={className}>{format(date, 'MMM d')}</time>;
}
