import type { TNote } from '@/lib/utils';

import { ActiveLink } from './active-link';
import { Time } from './time';

export function NoteItem({ id, text, inserted_at, title }: TNote) {
  return (
    <li>
      <ActiveLink
        // @ts-expect-error this is a valid route
        href={`/note/${id}`}
        activeClassName="!bg-indigo-700 text-neutral-50 border-transparent focus:ring-indigo-700"
        className="flex flex-col rounded-md border p-4 text-neutral-400 transition-colors hover:bg-neutral-800 focus-visible:bg-neutral-800"
      >
        <h2 className="mb-1 truncate text-2xl font-semibold text-neutral-50">
          {title}
        </h2>
        <p className="line-clamp-3 text-sm">{text}</p>
        <Time
          date={new Date(inserted_at)}
          className="mt-2 flex justify-end text-xs"
        />
      </ActiveLink>
    </li>
  );
}
