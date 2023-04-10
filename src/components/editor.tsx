import type { Editor } from '@tiptap/react';
import { EditorContent } from '@tiptap/react';

import { EditorToolbar } from './editor-toolbar';

export function TipTapEditor({ editor }: { editor: Editor }) {
  return (
    <div className="my-4 rounded-md border">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
