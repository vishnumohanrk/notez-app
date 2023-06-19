'use client';

import { EditorContent } from '@tiptap/react';

import type { TForm } from '@/types';

import { EditorToolbar } from './editor-toolbar';
import { SubmitButton } from './submit';
import { useEditor } from './use-editor';

type Props =
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
    };

export default function NoteEditor({
  type,
  action,
  children,
  initContent,
}: Props) {
  const editor = useEditor({ content: initContent || '<p>Note Content</p>' });

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
    <form action={submit} className="pb-20">
      {children}
      <div className="rounded-md border">
        <EditorToolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      {type === 'update' ? (
        initContent !== editor.getHTML() && <SubmitButton text="Save Changes" />
      ) : (
        <SubmitButton text="Create Note" />
      )}
    </form>
  );
}
