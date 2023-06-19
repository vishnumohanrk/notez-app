import type { Note } from '@prisma/client';
import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { validateOwner } from '@/lib/utils';

import { AlertDialog } from '../shared/alert-dialog';
import { FormButton } from '../shared/form-button';

export function DeleteNote({ id }: Pick<Note, 'id'>) {
  async function deleteNoteAction() {
    'use server';
    await validateOwner(id);
    await db.note.delete({ where: { id } });

    redirect('/');
  }

  return (
    <AlertDialog
      action={deleteNoteAction}
      actionElem={<FormButton variant="danger">Yes, Delete</FormButton>}
      description="This action cannot be undone. This will permanently delete this Note."
    >
      <button type="button" className="font-semibold text-red-400 underline">
        Delete Note
      </button>
    </AlertDialog>
  );
}
