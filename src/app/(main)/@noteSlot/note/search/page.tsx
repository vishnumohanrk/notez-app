import { NoteItem } from '@/components/note-item';
import { NotePageHeader } from '@/components/note-page-header';

export default function SearchPage({
  searchParams: { query },
}: {
  searchParams: { query: string | string[] | undefined };
}) {
  return (
    <section>
      <NotePageHeader>
        <h2 className="flex items-center font-semibold lg:h-12 lg:text-lg">
          Your Notes containing the query: {query}
        </h2>
      </NotePageHeader>
      <ul className="my-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <NoteItem
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla tempora cupiditate commodi voluptatum temporibus assumenda delectus ullam a. Non sit aperiam odit reiciendis porro ducimus ut reprehenderit, quasi asperiores."
          createdAt={new Date()}
          updatedAt={new Date()}
          id="10"
          title="Lorem ipsum"
          userId="123"
        />
        <NoteItem
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla tempora cupiditate commodi voluptatum temporibus assumenda delectus ullam a. Non sit aperiam odit reiciendis porro ducimus ut reprehenderit, quasi asperiores."
          createdAt={new Date()}
          updatedAt={new Date()}
          id="10"
          title="Lorem ipsum"
          userId="123"
        />
        <NoteItem
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla tempora cupiditate commodi voluptatum temporibus assumenda delectus ullam a. Non sit aperiam odit reiciendis porro ducimus ut reprehenderit, quasi asperiores."
          createdAt={new Date()}
          updatedAt={new Date()}
          id="10"
          title="Lorem ipsum"
          userId="123"
        />
        <NoteItem
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla tempora cupiditate commodi voluptatum temporibus assumenda delectus ullam a. Non sit aperiam odit reiciendis porro ducimus ut reprehenderit, quasi asperiores."
          createdAt={new Date()}
          updatedAt={new Date()}
          id="10"
          title="Lorem ipsum"
          userId="123"
        />
        <NoteItem
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla tempora cupiditate commodi voluptatum temporibus assumenda delectus ullam a. Non sit aperiam odit reiciendis porro ducimus ut reprehenderit, quasi asperiores."
          createdAt={new Date()}
          updatedAt={new Date()}
          id="10"
          title="Lorem ipsum"
          userId="123"
        />
      </ul>
    </section>
  );
}
