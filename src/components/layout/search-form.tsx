'use client';

import { useRouter } from 'next/navigation';

export function SearchForm({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get('query');

    if (query && query.length >= 3) {
      router.push(`/note/search?query=${query}`);
    }
  }

  return (
    <form className="sticky top-4 z-50 my-4" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
