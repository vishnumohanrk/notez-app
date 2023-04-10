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
      {/* DATE STUFF */}
    </NotePageContent>
  );
}
