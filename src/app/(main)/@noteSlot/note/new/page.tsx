/* eslint-disable jsx-a11y/no-autofocus */
'use client';

import { useRef } from 'react';

import { TipTapEditor } from '@/components/editor';
import { HomeLink } from '@/components/home-link';
import { useEditorInstance } from '@/hooks/use-editor-instance';

export default function NewNotePage() {
  const ref = useRef<HTMLInputElement>(null);

  const editor = useEditorInstance({
    autofocus: false,
    content: '<h2>Note Content</h2>',
  });

  return (
    <>
      <div className="flex items-center p-4">
        <HomeLink />
        <label htmlFor="newNoteTitle" className="sr-only">
          New Note Title
        </label>
        <input
          autoFocus
          ref={ref}
          type="text"
          id="newNoteTitle"
          defaultValue="Note Title"
          className="line-clamp-1 h-12 w-full flex-1 rounded-md border bg-transparent text-4xl font-bold leading-tight lg:px-4"
        />
      </div>
      <TipTapEditor editor={editor} />
      <div className="sticky bottom-0 flex w-full justify-end border-t bg-slate-800 p-4">
        <button
          type="button"
          className="rounded-md bg-indigo-800 px-8 py-2 font-semibold"
        >
          Create
        </button>
      </div>
    </>
  );
}
