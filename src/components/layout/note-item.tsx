import type { TNoteListSelect } from '@/types';

import { ActiveLink } from '../shared/active-link';
import { Time } from '../shared/time';

export function NoteItem({ id, title, noteText, createdAt }: TNoteListSelect) {
  return (
    <li>
      <ActiveLink
        // @ts-expect-error TODO
        href={`/note/${id}`}
        activeClassName="border-transparent !bg-indigo-700 text-neutral-50 focus:ring-indigo-700"
        className="block rounded-md border p-4 text-neutral-400 transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-950"
      >
        <h2 className="mb-1 truncate text-2xl font-semibold text-neutral-50">
          {title}
        </h2>
        <p className="line-clamp-3 text-sm">{noteText}</p>
        <p className="mt-3 flex justify-end text-xs">
          Created on&nbsp;
          <Time date={createdAt} />
        </p>
      </ActiveLink>
    </li>
  );
}
