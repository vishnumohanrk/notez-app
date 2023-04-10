import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import type { EditorOptions } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const editorOptions: Partial<EditorOptions> = {
  autofocus: 'end',

  extensions: [
    StarterKit,
    Highlight,
    Underline,
    Subscript,
    Superscript,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Link,
  ],

  editorProps: {
    attributes: {
      class:
        'prose prose-invert max-w-none min-h-[50vh] p-4 focus:outline-none prose-a:cursor-pointer',
    },
  },
};
