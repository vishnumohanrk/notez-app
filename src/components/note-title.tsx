'use client';

import clsx from 'clsx';
import { Check, Edit2 } from 'lucide-react';
import { memo, useRef, useState } from 'react';

import { useMutation } from '@/hooks/use-mutation';

import { NotePageHeader } from './note-page-header';

type EditTitleProps = {
  text: string;
  noteId: string;
};

export const NoteTitle = memo(({ noteId, text }: EditTitleProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const { isMutating, mutate } = useMutation();

  function toggle() {
    const inp = ref.current;

    if (isEditing) {
      setIsEditing(false);
      if (inp?.validity.valid && inp.value !== text) {
        mutate(`/api/note/${noteId}`, {
          method: 'PUT',
          body: JSON.stringify({ title: inp.value }),
        });
      }
    } else {
      setIsEditing(true);
    }
  }

  const Icon = isEditing ? Check : Edit2;

  return (
    <NotePageHeader
      className={clsx(isMutating && 'pointer-events-none opacity-50')}
    >
      {isEditing ? (
        <input
          required
          ref={ref}
          minLength={3}
          defaultValue={text}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          aria-label="Edit Note Title"
          className={`${compClass} -translate-y-0.5 rounded-md bg-slate-800 max-lg:w-[calc(100vw-9rem)]`}
        />
      ) : (
        <h2 className={compClass}>{text}</h2>
      )}
      <button
        type="button"
        onClick={toggle}
        title={isEditing ? 'Save' : 'Edit Note Title'}
        className="ml-1 h-12 rounded-md border px-3 transition-colors focus-visible:bg-slate-800 hover:bg-slate-800"
      >
        <Icon className="h-5 w-5" />
      </button>
    </NotePageHeader>
  );
});

NoteTitle.displayName = 'EditNoteTitleComp';

const compClass = 'h-12 flex-1 line-clamp-1 text-4xl font-bold leading-tight';
