import { NoteListContainer } from '@/components/note-list-container';
import { NotePageContainer } from '@/components/note-page-container';
import { UserProfile } from '@/components/user-profile';
import { getUser } from '@/lib/auth';

type AppLayoutProps = {
  noteSlot: React.ReactNode;
  listSlot: React.ReactNode;
  authslot: React.ReactNode;
};

export default async function AppLayout({
  listSlot,
  noteSlot,
  authslot,
}: AppLayoutProps) {
  const user = await getUser();

  if (!user) return authslot;

  return (
    <div className="flex">
      <NoteListContainer userProfile={<UserProfile {...user} />}>
        {listSlot}
      </NoteListContainer>
      <NotePageContainer>{noteSlot}</NotePageContainer>
    </div>
  );
}
