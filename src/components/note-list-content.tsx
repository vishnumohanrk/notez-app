import { getAllNotes } from '@/lib/api';

import { NewNote } from './new-note';
import { NoteItem } from './note-item';

export async function NoteListContent({ label }: { label?: string }) {
  const notes = await getAllNotes();

  return (
    <>
      <nav>
        <NewNote variant={notes.length ? 'floating' : 'full'} />
        <ul className="space-y-4 pb-16">
          {notes.map((i) => (
            <NoteItem key={i.id} {...i} />
          ))}
        </ul>
      </nav>
    </>
  );
}
