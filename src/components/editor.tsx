import type { Editor } from '@tiptap/react';
import { EditorContent } from '@tiptap/react';

import { EditorToolbar } from './editor-toolbar';

export function TipTapEditor({ editor }: { editor: Editor | null }) {
  if (!editor) return null;

  return (
    <div className="m-4 rounded-md border">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
