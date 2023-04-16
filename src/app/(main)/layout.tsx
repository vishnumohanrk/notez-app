import { MainLayout } from '@/components/layout';
import { NoteListContent } from '@/components/layout/note-list-content';

export default function Layout({ children }: { children: React.ReactNode }) {
  // @ts-expect-error async comp
  return <MainLayout noteList={<NoteListContent />}>{children}</MainLayout>;
}
