import { revalidatePath } from 'next/cache';
import { notFound } from 'next/navigation';

import { DeleteNote } from '@/components/note/delete';
import { NoteEditor } from '@/components/note/editor';
import { NoteHeader } from '@/components/note/header';
import { SubmitButton } from '@/components/note/submit';
import { NoteTitle } from '@/components/note/title';
import { Time } from '@/components/shared/time';
import { db } from '@/lib/db';
import { getAuthUserId } from '@/lib/session';
import { validateOwner } from '@/lib/utils';
import type { TForm } from '@/types';

type PageProps = {
  params: { id: string };
};

async function getNoteById(id: string) {
  const [userId, note] = await Promise.all([
    getAuthUserId(),
    db.note.findUnique({
      where: { id },
    }),
  ]);

  const isAuthor = note?.userId === userId;

  if (!note || !isAuthor) {
    notFound();
  }

  return note;
}

export default async function NoteIDPage({ params: { id } }: PageProps) {
  const { title, updatedAt, noteHTML } = await getNoteById(id);

  async function updateNote(data: Partial<TForm>) {
    'use server';
    await validateOwner(id);
    await db.note.update({
      where: { id },
      data,
    });

    revalidatePath('/note/[id]');
  }

  return (
    <>
      <NoteHeader>
        <NoteTitle title={title} action={updateNote} />
      </NoteHeader>
      <div className="mb-2 flex justify-between text-sm text-neutral-400">
        <p>
          Last Edited on <Time date={updatedAt} />
        </p>
        <DeleteNote id={id} />
      </div>
      <NoteEditor
        type="update"
        action={updateNote}
        initContent={noteHTML}
        footer={<SubmitButton text="Save Changes" />}
      />
    </>
  );
}
