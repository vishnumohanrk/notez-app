import { format } from 'date-fns';

type TimeCompProps = {
  date: Date;
  className?: string;
};

export function Time({ date, className }: TimeCompProps) {
  return (
    <time
      className={className}
      title={date.toUTCString()}
      dateTime={date.toUTCString()}
    >
      {format(date, 'MMM d')}
    </time>
  );
}
