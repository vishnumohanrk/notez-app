import { MainLayout } from '@/components/layout';
import { NavBar } from '@/components/layout/nav-bar';

export default function NoteGroupLayout({ children }: React.PropsWithChildren) {
  return <MainLayout navBar={<NavBar />}>{children}</MainLayout>;
}
