'use client';

import type { Note } from '@prisma/client';

import { useEditorInstance } from '@/hooks/use-editor-instance';
import type { RCProps } from '@/lib/types';

import { TipTapEditor } from './editor';
import { NoteTitle } from './note-title';
import { SaveButton } from './save-button';

type Props = RCProps & Pick<Note, 'id' | 'content' | 'title'>;

export function NotePageContent({ id, title, content, children }: Props) {
  const editor = useEditorInstance({ content });

  if (!editor) return null;

  return (
    <>
      <NoteTitle noteId={id} text={title} />
      {children}
      <TipTapEditor editor={editor} />
      {editor.getHTML() !== content ? (
        <SaveButton text="Save Update" onClick={console.log} />
      ) : null}
    </>
  );
}
