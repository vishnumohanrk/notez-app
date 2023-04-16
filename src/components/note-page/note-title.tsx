/* eslint-disable jsx-a11y/no-autofocus */
'use client';

import { Check, Edit2 } from 'lucide-react';
import { memo, useRef, useState } from 'react';

import { TITLE_CLASS } from '@/lib/utils';

import { Header } from './header';

type EditTitleProps = {
  text: string;
  noteId: string;
};

export const NoteTitle = memo(({ text }: EditTitleProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  function toggle() {
    const inp = ref.current?.value;

    if (isEditing) {
      setIsEditing(false);
      if (inp && inp !== text) {
        console.log(inp);
      }
    } else {
      setIsEditing(true);
    }
  }

  const Icon = isEditing ? Check : Edit2;

  return (
    <Header>
      {isEditing ? (
        <input
          required
          autoFocus
          ref={ref}
          minLength={3}
          defaultValue={text}
          aria-label="Edit Note Title"
          className={`${TITLE_CLASS} -translate-y-0.5 rounded-md bg-neutral-800 max-lg:w-[calc(100vw-9rem)]`}
        />
      ) : (
        <h2 className={TITLE_CLASS}>{text}</h2>
      )}
      <button
        type="button"
        onClick={toggle}
        title={isEditing ? 'Save' : 'Edit Note Title'}
        className="ml-1 h-12 rounded-md border px-3 transition-colors hover:bg-neutral-800 focus-visible:bg-neutral-800"
      >
        <Icon className="h-5 w-5" />
      </button>
    </Header>
  );
});

NoteTitle.displayName = 'EditNoteTitleComp';
