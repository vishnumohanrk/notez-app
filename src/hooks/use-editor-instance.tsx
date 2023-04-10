import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import type { EditorOptions } from '@tiptap/react';
import { useEditor } from '@tiptap/react';
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
        'prose prose-invert max-w-none min-h-screen p-4 focus:outline-none prose-a:cursor-pointer',
    },
  },
};

type UseEditorInstanceArgs = Partial<
  Omit<EditorOptions, 'extensions' | 'editorProps'>
>;

export function useEditorInstance(opts?: UseEditorInstanceArgs) {
  return useEditor({
    ...editorOptions,
    ...opts,
  });
}
