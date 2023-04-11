import { getAllNotes } from '@/lib/api';

import { NewNote } from './new-note';
import { NoteItem } from './note-item';

export async function NoteListContent({ label }: { label?: string }) {
  const notes = await getAllNotes();

  return (
    <>
      <NewNote />
      <nav>
        <ul className="space-y-4 px-4 pb-24">
          {notes.map((i) => (
            <NoteItem key={i.id} {...i} />
          ))}
        </ul>
      </nav>
    </>
  );
}
