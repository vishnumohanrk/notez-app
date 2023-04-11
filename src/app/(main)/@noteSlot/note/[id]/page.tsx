import { format } from 'date-fns';

import { DeleteNote } from '@/components/delete-note';
import { NotePageContent } from '@/components/note-page-content';
import { getNoteById } from '@/lib/api';

type NotePageProps = {
  params: { id: string };
};

export default async function NotePage({ params: { id } }: NotePageProps) {
  const note = await getNoteById(id);

  return (
    <NotePageContent id={note.id} title={note.title} html={note.html}>
      <div className="mt-2 flex justify-between text-sm text-slate-400">
        <p>Last Modified on {format(note.updatedAt, 'MMM dd')}</p>
        <DeleteNote id={note.id} />
      </div>
    </NotePageContent>
  );
}
