'use client';

import { EditorContent } from '@tiptap/react';

import type { TForm } from '@/types';

import { EditorToolbar } from './editor-toolbar';
import { useEditor } from './use-editor';

type Props = { footer: React.ReactNode } & (
  | {
      type: 'update';
      children?: never;
      initContent: string;
      action: (data: Omit<TForm, 'title'>) => Promise<void>;
    }
  | {
      type: 'create';
      children: React.ReactNode;
      initContent?: never;
      action: (data: TForm) => Promise<void>;
    }
);

export function NoteEditor({
  type,
  action,
  footer,
  children,
  initContent,
}: Props) {
  const editor = useEditor({ content: initContent || '<h2>Note Content</h2>' });

  if (!editor) return null;

  async function submit(formData: FormData) {
    const title = formData.get('title')?.toString();

    if (editor && editor.getText()) {
      const data = {
        noteText: editor.getText(),
        noteHTML: editor.getHTML(),
      };

      if (type === 'create') {
        await action({ ...data, title: title || 'Note' });
      } else {
        await action(data);
      }
    }
  }

  return (
    <form action={submit}>
      {children}
      <div className="rounded-md border">
        <EditorToolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      {type === 'create' ? footer : initContent !== editor.getHTML() && footer}
    </form>
  );
}
