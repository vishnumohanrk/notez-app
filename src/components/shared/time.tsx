import 'server-only';

import { format } from 'date-fns';

export function Time({ date }: { date: Date }) {
  return (
    <time dateTime={date.toISOString()} title={date.toUTCString()}>
      {format(date, 'MMM d')}
    </time>
  );
}
