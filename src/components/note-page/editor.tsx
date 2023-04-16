import type { Editor as TEditor } from '@tiptap/react';
import { EditorContent } from '@tiptap/react';

import { EditorToolbar } from './editor-toolbar';

export function Editor({ editor }: { editor: TEditor }) {
  return (
    <div className="rounded-md border">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
