import { Search } from 'lucide-react';
import { useRef } from 'react';

export function SearchBar({ onSubmit }: { onSubmit: (val: string) => void }) {
  const ref = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inp = ref.current;

    if (inp?.validity.valid) {
      onSubmit(inp.value);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="sticky top-0 w-full p-4">
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
        className="h-12 w-full rounded-md bg-slate-800 pl-14 pr-4 focus:bg-slate-900"
      />
      <button
        type="submit"
        title="Search"
        className="absolute left-4 h-12 px-4"
      >
        <Search size={20} />
      </button>
    </form>
  );
}
