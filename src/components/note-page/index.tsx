'use client';

import { useMutation } from '@/hooks/use-mutation';
import type { TNote } from '@/lib/utils';

import { Button } from '../shared/button';
import { Editor } from './editor';
import { Footer } from './footer';
import { NoteTitle } from './note-title';
import { useEditor } from './use-editor';

type NotePageProps = Pick<TNote, 'id' | 'html' | 'title'> & {
  children: React.ReactNode;
};

export function NotePage({ id, title, html, children }: NotePageProps) {
  const editor = useEditor({ content: html });
  const { isMutating, mutate } = useMutation();

  if (!editor) return null;

  function saveNote() {
    if (editor) {
      mutate(`/api/note/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          html: editor.getHTML(),
          text: editor.getText(),
        }),
      });
    }
  }

  return (
    <div className={isMutating ? 'pointer-events-none opacity-50' : ''}>
      <NoteTitle noteId={id} text={title} />
      {children}
      <Editor editor={editor} />
      {editor.getHTML() !== html ? (
        <Footer>
          <Button variant="primary" onClick={saveNote}>
            Save Changes
          </Button>
        </Footer>
      ) : null}
    </div>
  );
}
