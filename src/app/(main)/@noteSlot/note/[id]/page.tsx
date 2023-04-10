import { format } from 'date-fns';

import { DeleteNote } from '@/components/delete-note';
import { NotePageContent } from '@/components/note-page-content';

export default function NotePage({
  params: { id },
}: {
  params: { id: string };
}) {
  // const note =

  return (
    <NotePageContent
      id="10"
      title="Lorem Ipsum"
      content="<h2>Hello World!!!</h2>"
    >
      <div className="mt-2 flex justify-between text-sm text-slate-400">
        <p>Last Modified on {format(new Date(), 'MMM dd')}</p>
        <DeleteNote id="10" />
      </div>
    </NotePageContent>
  );
}
