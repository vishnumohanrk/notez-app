import { Plus } from 'lucide-react';
import Link from 'next/link';

export function NewNote() {
  return (
    <Link
      href="/note/new"
      title="Create New Note"
      className="fixed bottom-4 left-4 translate-x-[calc(100vw-6rem)] rounded-full bg-indigo-800 p-3 focus:ring-indigo-800 lg:translate-x-72"
    >
      <Plus size={30} />
    </Link>
  );
}
