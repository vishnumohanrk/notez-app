import Link from 'next/link';

import { PageCenter } from '@/components/page-center';

export default function NoteDefaultPage() {
  return (
    <PageCenter text="Select Any Note to View/Edit">
      or{' '}
      <Link href="/note/new" className="font-medium underline">
        create a new Note
      </Link>
    </PageCenter>
  );
}
