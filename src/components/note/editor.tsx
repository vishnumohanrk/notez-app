'use client';

import { EditorContent } from '@tiptap/react';

import { EditorToolbar } from './editor-toolbar';
import { useEditor } from './use-editor';

export default function NoteEditor() {
  const editor = useEditor();

  if (!editor) return null;

  return (
    <div className="overflow-hidden rounded-md border">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
