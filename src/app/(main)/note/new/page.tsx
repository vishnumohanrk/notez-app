import { redirect } from 'next/navigation';

import NoteEditor from '@/components/note/editor';
import { NoteHeader } from '@/components/note/header';
import { FormInput } from '@/components/shared/form-input';
import { db } from '@/lib/db';
import { getAuthUserId } from '@/lib/session';
import type { TForm } from '@/types';

async function createNote(data: TForm) {
  'use server';
  const userId = await getAuthUserId();
  const note = await db.note.create({
    data: { userId, ...data },
    select: { id: true },
  });

  redirect(`/note/${note.id}`);
}

export default function NewNotePage() {
  return (
    <NoteEditor type="create" action={createNote}>
      <NoteHeader>
        <FormInput
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          name="title"
          label="Enter Note Title"
          className="px-4 text-2xl font-bold"
        />
      </NoteHeader>
    </NoteEditor>
  );
}
