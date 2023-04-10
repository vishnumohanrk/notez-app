import { Editor } from '@/components/editor';
import { NoteTitle } from '@/components/note-title';

export default function NotePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <NoteTitle noteId={id} text="Lorem Ipsum" />
      <Editor />
    </>
  );
}
