import { NoteListSelect } from '@/lib/constants';
import { db } from '@/lib/db';
import { getAuthUserId } from '@/lib/session';

import { NewNote } from './new-note';
import { NoteItem } from './note-item';

async function getAllNotes() {
  const userId = await getAuthUserId();
  const notes = await db.note.findMany({
    where: { userId },
    select: NoteListSelect,
    orderBy: { createdAt: 'desc' },
  });

  return notes;
}

export async function NavList() {
  const notes = await getAllNotes();

  return (
    <ul className="space-y-4 pb-20">
      <NewNote variant={notes.length === 0 ? 'full' : 'floating'} />
      {notes.map((i) => (
        <NoteItem key={i.id} {...i} />
      ))}
    </ul>
  );
}
