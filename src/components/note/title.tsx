'use client';

import type { Note } from '@prisma/client';
import { Check, Edit2 } from 'lucide-react';
import { useState } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import { FormInput } from '../shared/form-input';
import { IconButton } from '../shared/icon-button';

export function NoteTitle({ title }: Pick<Note, 'title'>) {
  const { pending } = useFormStatus();
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((c) => !c);
  }

  return (
    <>
      {isEditing ? (
        <FormInput
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          name="title"
          defaultValue={title}
          label="Edit Note Title"
          className="border bg-transparent py-px text-4xl font-bold lg:pt-0"
        />
      ) : (
        <h3 className="line-clamp-1 grow border border-transparent text-4xl font-bold">
          {title}
        </h3>
      )}
      <IconButton
        disabled={pending}
        onClick={handleClick}
        type={isEditing ? 'submit' : 'button'}
        title={isEditing ? 'Done' : 'Edit Note Title'}
        className="border transition-colors hover:bg-neutral-800"
      >
        {isEditing ? <Check /> : <Edit2 />}
      </IconButton>
    </>
  );
}
