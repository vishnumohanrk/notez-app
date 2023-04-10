'use client';

import { EditorContent, useEditor } from '@tiptap/react';

import { editorOptions } from '@/lib/utils';

import { EditorToolbar } from './editor-toolbar';

export function Editor() {
  const editor = useEditor({
    ...editorOptions,
    content: `<h2>Note Content</h2>`,
  });

  if (!editor) return null;

  return (
    <div className="my-4 rounded-md border">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
