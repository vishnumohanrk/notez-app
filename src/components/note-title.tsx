'use client';

import { ArrowLeft, Check, Edit2, Trash } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

type EditTitleProps = {
  text: string;
  noteId: string;
};

export function NoteTitle({ noteId, text }: EditTitleProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  function toggle() {
    const inp = ref.current;

    if (isEditing) {
      setIsEditing(false);
      if (inp?.validity.valid) {
        console.log({ noteId, newTitle: inp.value });
      }
    } else {
      setIsEditing(true);
    }
  }

  const Icon = isEditing ? Check : Edit2;

  return (
    <div className="flex items-center">
      <HomeLink />
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
        onClick={toggle}
        title={isEditing ? 'Save' : 'Edit Note Title'}
        className="ml-1 h-12 rounded-md border px-3 transition-colors hover:bg-slate-800"
      >
        <Icon className="h-5 w-5" />
      </button>
    </div>
  );
}

const compClass = 'h-12 flex-1 line-clamp-1 text-4xl font-bold leading-tight';

function HomeLink() {
  return (
    <Link
      href="/"
      className="inline-flex h-12 w-12 items-center underline lg:hidden"
    >
      <ArrowLeft size={32} />
      <span className="sr-only">Back</span>
    </Link>
  );
}
