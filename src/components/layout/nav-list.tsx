import { NewNote } from './new-note';
import { NoteItem } from './note-item';

export function NavList() {
  return (
    <ul className="space-y-4 pb-20">
      <NewNote variant="floating" />
      <NoteItem
        createdAt={new Date()}
        title="Lorem Note"
        id="123"
        noteText="Lorem ipsum, "
      />
      <NoteItem
        createdAt={new Date()}
        title="Lorem Note"
        id="122"
        noteText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse vitae doloribus, ea amet dolorem nam at ipsam! Culpa, velit a ut, accusamus hic dolorem, consequatur itaque perferendis possimus quidem mollitia."
      />
      <NoteItem
        createdAt={new Date()}
        title="Lorem Note"
        id="124"
        noteText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse vitae doloribus, ea amet dolorem nam at ipsam! Culpa, velit a ut, accusamus hic dolorem, consequatur itaque perferendis possimus quidem mollitia."
      />
      <NoteItem
        createdAt={new Date()}
        title="Lorem Note"
        id="1230"
        noteText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse vitae doloribus, ea amet dolorem nam at ipsam! Culpa, velit a ut, accusamus hic dolorem, consequatur itaque perferendis possimus quidem mollitia."
      />
      <NoteItem
        createdAt={new Date()}
        title="Lorem Note"
        id="1231"
        noteText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse vitae doloribus, ea amet dolorem nam at ipsam! Culpa, velit a ut, accusamus hic dolorem, consequatur itaque perferendis possimus quidem mollitia."
      />
      <NoteItem
        createdAt={new Date()}
        title="Lorem Note"
        id="1232"
        noteText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse vitae doloribus, ea amet dolorem nam at ipsam! Culpa, velit a ut, accusamus hic dolorem, consequatur itaque perferendis possimus quidem mollitia."
      />
      <NoteItem
        createdAt={new Date()}
        title="Lorem Note"
        id="1233"
        noteText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse vitae doloribus, ea amet dolorem nam at ipsam! Culpa, velit a ut, accusamus hic dolorem, consequatur itaque perferendis possimus quidem mollitia."
      />
      <NoteItem
        createdAt={new Date()}
        title="Lorem Note"
        id="12367"
        noteText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse vitae doloribus, ea amet dolorem nam at ipsam! Culpa, velit a ut, accusamus hic dolorem, consequatur itaque perferendis possimus quidem mollitia."
      />
      <NoteItem
        createdAt={new Date()}
        title="Lorem Note"
        id="123123123"
        noteText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse vitae doloribus, ea amet dolorem nam at ipsam! Culpa, velit a ut, accusamus hic dolorem, consequatur itaque perferendis possimus quidem mollitia."
      />
    </ul>
  );
}
