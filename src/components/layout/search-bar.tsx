import { Search } from 'lucide-react';
import { useRef } from 'react';

import { UserProfile } from './user-profile';

export function SearchBar({ submit }: { submit: (val: string) => void }) {
  const ref = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inp = ref.current?.value;

    if (inp && inp.length >= 3) {
      submit(inp);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="sticky top-4 mb-4 w-full">
      <label htmlFor="search" className="sr-only">
        Search Notes
      </label>
      <input
        required
        ref={ref}
        id="search"
        name="query"
        type="search"
        minLength={3}
        placeholder="Search Notes"
        className="h-12 w-full rounded-md bg-neutral-800 pl-14 pr-12 focus:bg-neutral-900"
      />
      <button
        type="submit"
        title="Search"
        className="absolute left-0 h-12 px-4"
      >
        <Search size={20} />
      </button>
      <UserProfile />
    </form>
  );
}
