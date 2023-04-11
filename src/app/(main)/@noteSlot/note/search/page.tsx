import { NoteItem } from '@/components/note-item';
import { NotePageHeader } from '@/components/note-page-header';
import { searchNotes } from '@/lib/api';

type Props = {
  searchParams: { query: string | string[] | undefined };
};

export default async function SearchPage({ searchParams: { query } }: Props) {
  const notes = await searchNotes(query);

  return (
    <section>
      <NotePageHeader>
        <h2 className="flex items-center font-semibold lg:h-12 lg:text-lg">
          Your Notes containing the text: {query}
        </h2>
      </NotePageHeader>
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
