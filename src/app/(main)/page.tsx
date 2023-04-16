import Link from 'next/link';

import { PageCenter } from '@/components/shared/page-center';

export default function AppHome() {
  return (
    <PageCenter text="Select Any Note to View/Edit">
      or{' '}
      <Link href="/note/new" className="font-medium underline">
        create a new Note
      </Link>
    </PageCenter>
  );
}
