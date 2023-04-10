import { NoteListContainer } from '@/components/note-list-container';
import { NotePageContainer } from '@/components/note-page-container';

export default function AppLayout({
  listSlot,
  noteSlot,
}: {
  noteSlot: React.ReactNode;
  listSlot: React.ReactNode;
}) {
  return (
    <div className="flex">
      <NoteListContainer>{listSlot}</NoteListContainer>
      <NotePageContainer>{noteSlot}</NotePageContainer>
    </div>
  );
}
