/* eslint-disable jsx-a11y/no-autofocus */
'use client';

import { useRef } from 'react';

import { Editor } from '@/components/note-page/editor';
import { Footer } from '@/components/note-page/footer';
import { Header } from '@/components/note-page/header';
import { useEditor } from '@/components/note-page/use-editor';
import { Button } from '@/components/shared/button';
import { useMutation } from '@/hooks/use-mutation';
import { TITLE_CLASS } from '@/lib/utils';

export default function NewNotePage() {
  const editor = useEditor({
    autofocus: false,
    content: '<h2>Note Content</h2>',
  });

  const ref = useRef<HTMLInputElement>(null);
  const { isMutating, mutate } = useMutation();

  if (!editor) return null;

  async function createNote() {
    const inp = ref.current?.value;

    if (inp && editor) {
      mutate('/api/note/create', {
        method: 'POST',
        body: JSON.stringify({
          title: inp,
          html: editor.getHTML(),
          text: editor.getText(),
        }),
      });
    }
  }

  return (
    <div className={isMutating ? 'pointer-events-none opacity-50' : ''}>
      <Header>
        <label htmlFor="newNoteTitle" className="sr-only">
          New Note Title
        </label>
        <input
          required
          autoFocus
          ref={ref}
          type="text"
          id="newNoteTitle"
          defaultValue="Note Title"
          className={`${TITLE_CLASS} rounded-md border bg-transparent`}
        />
      </Header>
      <Editor editor={editor} />
      <Footer>
        <Button variant="primary" onClick={createNote}>
          Create
        </Button>
      </Footer>
    </div>
  );
}

export const dynamic = 'force-static';
