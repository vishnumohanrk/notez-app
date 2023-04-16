import { NewNote } from '@/components/layout/new-note';
import { NoteItem } from '@/components/shared/note-item';
import { notes } from '@/lib/utils';

export async function NoteListContent() {
  return (
    <nav>
      <NewNote variant={notes.length ? 'floating' : 'full'} />
      <ul className="space-y-4 pb-16">
        {notes.map((i) => (
          <NoteItem key={i.id} {...i} />
        ))}
      </ul>
    </nav>
  );
}
