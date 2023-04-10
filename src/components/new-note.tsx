import { Plus } from 'lucide-react';
import Link from 'next/link';

export function NewNote() {
  return (
    <Link
      href="/note/new"
      className="fixed bottom-4 left-4 translate-x-[calc(100vw-6rem)] rounded-full bg-slate-800 p-3 lg:translate-x-72"
    >
      <Plus size={30} />
    </Link>
  );
}
