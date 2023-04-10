'use client';

import type { Note } from '@prisma/client';

import { useEditorInstance } from '@/hooks/use-editor-instance';
import type { RCProps } from '@/lib/types';

import { TipTapEditor } from './editor';
import { NoteTitle } from './note-title';

type Props = RCProps & Pick<Note, 'id' | 'content' | 'title'>;

export function NotePageContent({ id, title, content, children }: Props) {
  const editor = useEditorInstance({ content });

  return (
    <>
      <NoteTitle noteId={id} text={title} />
      {children}
      <TipTapEditor editor={editor} />
      <div className="sticky bottom-0 flex w-full justify-end border-t bg-slate-800 p-4">
        <button
          type="button"
          className="rounded-md bg-indigo-800 px-8 py-2 font-semibold"
        >
          Save
        </button>
      </div>
    </>
  );
}
