'use client';

import type { Note } from '@prisma/client';
import clsx from 'clsx';

import { useEditorInstance } from '@/hooks/use-editor-instance';
import { useMutation } from '@/hooks/use-mutation';
import type { RCProps } from '@/lib/types';

import { TipTapEditor } from './editor';
import { NoteTitle } from './note-title';
import { SaveButton } from './save-button';

type Props = RCProps & Pick<Note, 'id' | 'html' | 'title'>;

export function NotePageContent({ id, title, html, children }: Props) {
  const { isMutating, mutate } = useMutation();
  const editor = useEditorInstance({ content: html });

  function saveUpdate() {
    mutate(`/api/note/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        html: editor?.getHTML(),
        text: editor?.getText(),
      }),
    });
  }

  if (!editor) return null;

  return (
    <div className={clsx(isMutating && 'pointer-events-none opacity-50')}>
      <NoteTitle noteId={id} text={title} />
      {children}
      <TipTapEditor editor={editor} />
      {editor.getHTML() !== html ? (
        <SaveButton text="Save Update" onClick={saveUpdate} />
      ) : null}
    </div>
  );
}
