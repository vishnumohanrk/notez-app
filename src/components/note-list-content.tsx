import { NewNote } from './new-note';
import { NoteItem } from './note-item';

export async function NoteListContent({ label }: { label?: string }) {
  return (
    <>
      <NewNote />
      <nav>
        <ul className="space-y-4 px-4 pb-24">
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
          <NoteItem
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla tempora cupiditate commodi voluptatum temporibus assumenda delectus ullam a. Non sit aperiam odit reiciendis porro ducimus ut reprehenderit, quasi asperiores."
            createdAt={new Date()}
            updatedAt={new Date()}
            id="10"
            title="Lorem ipsum"
            userId="123"
          />
        </ul>
      </nav>
    </>
  );
}
