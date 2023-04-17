import { Header } from '@/components/note-page/header';
import { NoteItem } from '@/components/shared/note-item';
import { searchNotes } from '@/lib/api';

type Props = {
  searchParams: { query: string | string[] | undefined };
};

export const metadata = {
  title: 'Search your Notes | Notez App',
};

export default async function SearchPage({ searchParams: { query } }: Props) {
  const notes = await searchNotes(query);

  return (
    <section>
      <Header>
        <h2 className="flex items-center font-semibold lg:h-12 lg:text-lg">
          Your Notes containing the exact text: {query}
        </h2>
      </Header>
      <ul className="my-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
        {notes?.length ? (
          notes.map((i) => <NoteItem key={i.id} {...i} />)
        ) : (
          <li>No Notes for that query</li>
        )}
      </ul>
    </section>
  );
}
