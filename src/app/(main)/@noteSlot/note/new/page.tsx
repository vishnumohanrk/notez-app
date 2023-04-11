/* eslint-disable jsx-a11y/no-autofocus */
'use client';

import clsx from 'clsx';
import { useRef } from 'react';

import { TipTapEditor } from '@/components/editor';
import { NotePageHeader } from '@/components/note-page-header';
import { SaveButton } from '@/components/save-button';
import { useEditorInstance } from '@/hooks/use-editor-instance';
import { useMutation } from '@/hooks/use-mutation';

export default function NewNotePage() {
  const ref = useRef<HTMLInputElement>(null);
  const { isMutating, mutate } = useMutation();

  const editor = useEditorInstance({
    autofocus: false,
    content: '<h2>Note Content</h2>',
  });

  if (!editor) return null;

  function saveNote() {
    const inp = ref.current?.value;

    if (inp) {
      mutate('/api/note/create', {
        method: 'POST',
        body: JSON.stringify({
          title: inp,
          html: editor?.getHTML(),
          text: editor?.getText(),
        }),
      });
    }
  }

  return (
    <div className={clsx(isMutating && 'pointer-events-none opacity-50')}>
      <NotePageHeader>
        <label htmlFor="newNoteTitle" className="sr-only">
          New Note Title
        </label>
        <input
          autoFocus
          required
          ref={ref}
          type="text"
          id="newNoteTitle"
          defaultValue="Note Title"
          className="line-clamp-1 h-12 w-full rounded-md border bg-transparent text-4xl font-bold leading-tight"
        />
      </NotePageHeader>
      <TipTapEditor editor={editor} />
      <SaveButton onClick={saveNote} text="Create Note" />
    </div>
  );
}

export const dynamic = 'force-static';
