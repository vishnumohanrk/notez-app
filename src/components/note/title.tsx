'use client';

import { Check, Edit2 } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';

import { FormInput } from '../shared/form-input';
import { IconButton } from '../shared/icon-button';

type Props = {
  title: string;
  action: (d: { title: string }) => void;
};

export function NoteTitle({ action, title }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const [pending, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(title);

  function handleClick() {
    const val = ref.current?.value;

    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    if (isEditing && val) {
      setIsEditing(false);
      setText(val);
      if (val !== title) {
        startTransition(() => action({ title: val }));
      }
    }
  }

  return (
    <>
      {isEditing ? (
        <FormInput
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          ref={ref}
          name="title"
          disabled={pending}
          defaultValue={text}
          label="Edit Note Title"
          className="border bg-transparent py-px text-3xl font-bold lg:pt-0"
        />
      ) : (
        <h3 className="line-clamp-1 grow border border-transparent text-3xl font-bold">
          {text}
        </h3>
      )}
      <IconButton
        disabled={pending}
        onClick={handleClick}
        title={isEditing ? 'Done' : 'Edit Note Title'}
        className="border transition-colors hover:bg-neutral-800"
      >
        {isEditing ? <Check /> : <Edit2 />}
      </IconButton>
    </>
  );
}
