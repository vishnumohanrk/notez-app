import { NotePage } from '@/components/note-page';
import { DeleteNote } from '@/components/note-page/delete-note';
import { Time } from '@/components/shared/time';
import { getNoteById } from '@/lib/api';

type NoteIDPageProps = {
  params: { id: string };
};

export default async function NoteIDPage({ params }: NoteIDPageProps) {
  const note = await getNoteById(params.id);

  return (
    <NotePage html={note.html} id={note.id} title={note.title}>
      <div className="mb-2 mt-3 flex justify-between text-sm text-neutral-400">
        <p>
          Last Modified on <Time date={new Date(note.updated_at)} />
        </p>
        <DeleteNote id={note.id} />
      </div>
    </NotePage>
  );
}
