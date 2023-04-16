'use client';

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

  if (!editor) return null;

  return (
    <div>
      <NoteTitle noteId={id} text={title} />
      {children}
      <Editor editor={editor} />
      {editor.getHTML() !== html ? (
        <Footer>
          <Button variant="primary">Save Changes</Button>
        </Footer>
      ) : null}
    </div>
  );
}
