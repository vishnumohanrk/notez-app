import type { Note } from '@prisma/client';
import { format } from 'date-fns';
import Link from 'next/link';

export function NoteItem({ id, content, createdAt, title }: Note) {
  return (
    <li>
      <Link
        href={`/note/${id}`}
        className="flex flex-col rounded-md border p-4 text-slate-400 transition-colors focus-visible:bg-slate-800 hover:bg-slate-800"
      >
        <h2 className="mb-1 truncate text-2xl font-semibold text-slate-50">
          {title}
        </h2>
        <p className="line-clamp-3 text-sm">{content}</p>
        <p className="mt-2 flex justify-end text-xs">
          {format(createdAt, 'MMM d')}
        </p>
      </Link>
    </li>
  );
}
