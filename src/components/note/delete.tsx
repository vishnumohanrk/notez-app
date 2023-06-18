import type { Note } from '@prisma/client';

import { AlertDialog } from '../shared/alert-dialog';
import { FormButton } from '../shared/form-button';

export function DeleteNote({ id }: Pick<Note, 'id'>) {
  return (
    <AlertDialog
      description="This action cannot be undone. This will permanently delete this Note."
      actionElem={<FormButton variant="danger">Yes, Delete</FormButton>}
    >
      <button type="button" className="font-semibold text-red-400 underline">
        Delete Note
      </button>
    </AlertDialog>
  );
}
