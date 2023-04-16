import { NotePage } from '@/components/note-page';
import { DeleteNote } from '@/components/note-page/delete-note';
import { Time } from '@/components/shared/time';

export default function NoteIDPage({ params }: { params: { id: string } }) {
  return (
    <NotePage html="<h2>Note Content</h2>" id="12" title="Lorem Ipsum">
      <div className="mb-2 mt-3 flex justify-between text-sm text-neutral-400">
        <p>
          Last Modified on <Time date={new Date()} className="" />
        </p>
        <DeleteNote id="1" />
      </div>
    </NotePage>
  );
}
