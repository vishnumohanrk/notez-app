import { NewNote } from '@/components/layout/new-note';
import { NoteItem } from '@/components/shared/note-item';
import { getAllNotes } from '@/lib/api';

export async function NoteListContent() {
  const notes = await getAllNotes();

  return (
    <nav>
      <NewNote variant={notes?.length ? 'floating' : 'full'} />
      <ul className="space-y-4 pb-16">
        {notes?.map((i) => (
          <NoteItem key={i.id} {...i} />
        ))}
      </ul>
    </nav>
  );
}
