import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <>
      <label htmlFor="search" className="sr-only">
        Search Notes
      </label>
      <input
        required
        id="search"
        name="query"
        type="search"
        minLength={3}
        autoComplete="off"
        placeholder="Search Notes"
        className="h-12 w-full rounded-md bg-neutral-800 px-12 focus:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-950"
      />
      <button
        type="submit"
        title="Search"
        className="absolute left-0 inline-flex h-12 w-12 items-center justify-center"
      >
        <Search size={20} />
      </button>
    </>
  );
}
