import { EditorToolbar } from '@/components/editor-toolbar';
import { NoteTitle } from '@/components/note-title';

export default function NotePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <NoteTitle noteId={id} text="Lorem Ipsum" />
      <div className="my-4 min-h-screen rounded-md border">
        <EditorToolbar />
        <div className="px-4"></div>
      </div>
    </>
  );
}
