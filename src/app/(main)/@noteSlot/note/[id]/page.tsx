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
        <div className="sticky top-0 h-14 border-b bg-slate-800 px-4"></div>
        <div className="px-4"></div>
      </div>
    </>
  );
}
