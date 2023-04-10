'use client';

import * as Toolbar from '@radix-ui/react-toolbar';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Highlighter,
  Italic,
  Quote,
  Redo,
  RemoveFormatting,
  Strikethrough,
  Subscript,
  Superscript,
  Trash,
  Underline,
  Undo,
} from 'lucide-react';

import { EditorButton } from './editor-button';

export function EditorToolbar() {
  return (
    <Toolbar.Root
      aria-label="Formatting options"
      className="sticky top-0 flex h-[4.5rem] flex-nowrap items-center gap-2 overflow-auto border-b bg-slate-800 px-4 scrollbar-none lg:h-14 [&>*]:shrink-0"
    >
      <div className="flex">
        <EditorButton
          Icon={Undo}
          title="undo"
          variant="button"
          onClick={console.log}
        />
        <EditorButton
          Icon={Redo}
          title="redo"
          variant="button"
          onClick={console.log}
        />
      </div>
      <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
        <EditorButton Icon={Bold} title="bold" />
        <EditorButton Icon={Italic} title="italic" />
        <EditorButton Icon={Underline} title="underline" />
        <EditorButton Icon={Strikethrough} title="strike" />
        <EditorButton Icon={Subscript} title="subscript" />
        <EditorButton Icon={Superscript} title="superscript" />
        <EditorButton Icon={Highlighter} title="highlight" />
        <EditorButton Icon={Code} title="code" />
      </Toolbar.ToggleGroup>
      <Toolbar.ToggleGroup type="multiple" aria-label="Block Options">
        <EditorButton Icon={Heading1} title="Heading1" />
        <EditorButton Icon={Heading2} title="Heading2" />
        <EditorButton Icon={Heading3} title="Heading3" />
        <EditorButton Icon={Heading4} title="Heading4" />
        <EditorButton Icon={Quote} title="blockquote" />
        <EditorButton Icon={Code2} title="codeBlock" />
      </Toolbar.ToggleGroup>
      <Toolbar.ToggleGroup type="single" aria-label="Alignment">
        <EditorButton Icon={AlignLeft} title="Align Left" />
        <EditorButton Icon={AlignJustify} title="Justify" />
        <EditorButton Icon={AlignCenter} title="Align Center" />
        <EditorButton Icon={AlignRight} title="Align Right" />
      </Toolbar.ToggleGroup>
      <div className="flex flex-1 justify-end">
        <EditorButton
          variant="button"
          onClick={console.log}
          Icon={RemoveFormatting}
          title="Clear Formatting"
        />
        <EditorButton
          Icon={Trash}
          variant="button"
          title="Clear Editor"
          onClick={console.log}
        />
      </div>
    </Toolbar.Root>
  );
}
