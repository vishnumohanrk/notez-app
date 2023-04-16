/* eslint-disable jsx-a11y/no-autofocus */
'use client';

import { Editor } from '@/components/note-page/editor';
import { Footer } from '@/components/note-page/footer';
import { Header } from '@/components/note-page/header';
import { useEditor } from '@/components/note-page/use-editor';
import { Button } from '@/components/shared/button';
import { TITLE_CLASS } from '@/lib/utils';

export default function NewNotePage() {
  const editor = useEditor({
    autofocus: false,
    content: '<h2>Note Content</h2>',
  });

  if (!editor) return null;

  return (
    <div>
      <Header>
        <label htmlFor="newNoteTitle" className="sr-only">
          New Note Title
        </label>
        <input
          required
          autoFocus
          type="text"
          id="newNoteTitle"
          defaultValue="Note Title"
          className={`${TITLE_CLASS} rounded-md border bg-transparent`}
        />
      </Header>
      <Editor editor={editor} />
      <Footer>
        <Button variant="primary">Create</Button>
      </Footer>
    </div>
  );
}

export const dynamic = 'force-static';
