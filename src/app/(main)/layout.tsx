import { NoteListContainer } from '@/components/note-list-container';
import { NotePageContainer } from '@/components/note-page-container';
import { UserProfile } from '@/components/user-profile';

export default function AppLayout({
  listSlot,
  noteSlot,
}: {
  noteSlot: React.ReactNode;
  listSlot: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* @ts-expect-error Async Server Component */}
      <NoteListContainer userProfile={<UserProfile />}>
        {listSlot}
      </NoteListContainer>
      <NotePageContainer>{noteSlot}</NotePageContainer>
    </div>
  );
}
