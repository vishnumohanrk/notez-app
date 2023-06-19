import { NoteItem } from '@/components/layout/note-item';
import { NoteHeader } from '@/components/note/header';
import { NoteListSelect } from '@/lib/constants';
import { db } from '@/lib/db';
import { getAuthUserId } from '@/lib/session';

async function searchNotes(query?: string) {
  if (!query) return [];

  const userId = await getAuthUserId();
  const notes = await db.note.findMany({
    where: {
      userId,
      noteText: { search: query.replaceAll(' ', '|') },
      title: { search: query.replaceAll(' ', '|') },
    },
    select: NoteListSelect,
  });

  return notes;
}

export default async function SearchPage({
  searchParams: { query },
}: {
  searchParams: { query?: string };
}) {
  const notes = await searchNotes(query);

  return (
    <section>
      <NoteHeader>
        <h2 className="flex items-center font-semibold lg:h-12 lg:text-lg">
          Your Notes containing the text: {query}
        </h2>
      </NoteHeader>
      {notes.length ? (
        <ul className="my-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
          {notes.map((i) => (
            <NoteItem key={i.id} {...i} />
          ))}
        </ul>
      ) : (
        <p>No Notes for that query</p>
      )}
    </section>
  );
}
