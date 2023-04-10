/* eslint-disable jsx-a11y/no-autofocus */
'use client';

import { useRef } from 'react';

import { TipTapEditor } from '@/components/editor';
import { NotePageHeader } from '@/components/note-page-header';
import { SaveButton } from '@/components/save-button';
import { useEditorInstance } from '@/hooks/use-editor-instance';

export default function NewNotePage() {
  const ref = useRef<HTMLInputElement>(null);

  const editor = useEditorInstance({
    autofocus: false,
    content: '<h2>Note Content</h2>',
  });

  if (!editor) return null;

  return (
    <>
      <NotePageHeader>
        <label htmlFor="newNoteTitle" className="sr-only">
          New Note Title
        </label>
        <input
          autoFocus
          ref={ref}
          type="text"
          id="newNoteTitle"
          defaultValue="Note Title"
          className="line-clamp-1 h-12 w-full rounded-md border bg-transparent text-4xl font-bold leading-tight"
        />
      </NotePageHeader>
      <TipTapEditor editor={editor} />
      <SaveButton onClick={console.log} text="Create Note" />
    </>
  );
}
