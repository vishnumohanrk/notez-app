import * as Toolbar from '@radix-ui/react-toolbar';
import type { Editor } from '@tiptap/react';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Highlighter,
  Italic,
  List,
  ListOrdered,
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

// TODO REFACTOR
export function EditorToolbar({ editor }: { editor: Editor }) {
  return (
    <Toolbar.Root
      aria-label="Formatting options"
      className="sticky top-0 flex h-[4.5rem] flex-nowrap items-center gap-2 overflow-auto border-b bg-slate-800 px-4 scrollbar-none lg:h-14 [&>*]:shrink-0"
    >
      <div>
        <EditorButton
          Icon={Undo}
          title="undo"
          variant="button"
          onPress={() => editor.chain().focus().undo().run()}
        />
        <EditorButton
          Icon={Redo}
          title="redo"
          variant="button"
          onPress={() => editor.chain().focus().undo().run()}
        />
      </div>
      <div>
        <EditorButton
          Icon={Bold}
          title="bold"
          active={editor.isActive('bold')}
          onPress={() => editor.chain().focus().toggleBold().run()}
        />
        <EditorButton
          Icon={Italic}
          title="italic"
          active={editor.isActive('italic')}
          onPress={() => editor.chain().focus().toggleItalic().run()}
        />
        <EditorButton
          Icon={Underline}
          title="underline"
          active={editor.isActive('underline')}
          onPress={() => editor.chain().focus().toggleUnderline().run()}
        />
        <EditorButton
          title="strike"
          Icon={Strikethrough}
          active={editor.isActive('strike')}
          onPress={() => editor.chain().focus().toggleStrike().run()}
        />
        <EditorButton
          title="subscript"
          Icon={Subscript}
          active={editor.isActive('subscript')}
          onPress={() => editor.chain().focus().toggleSubscript().run()}
        />
        <EditorButton
          title="superscript"
          Icon={Superscript}
          active={editor.isActive('superscript')}
          onPress={() => editor.chain().focus().toggleSuperscript().run()}
        />
        <EditorButton
          title="highlight"
          Icon={Highlighter}
          active={editor.isActive('highlight')}
          onPress={() => editor.chain().focus().toggleHighlight().run()}
        />
      </div>
      <div>
        <EditorButton
          Icon={Heading1}
          title="Heading1"
          active={editor.isActive('heading', { level: 1 })}
          onPress={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        />
        <EditorButton
          Icon={Heading2}
          title="Heading2"
          active={editor.isActive('heading', { level: 2 })}
          onPress={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        />
        <EditorButton
          Icon={Heading3}
          title="Heading3"
          active={editor.isActive('heading', { level: 3 })}
          onPress={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        />
        <EditorButton
          Icon={Heading4}
          title="Heading4"
          active={editor.isActive('heading', { level: 4 })}
          onPress={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
        />
        <EditorButton
          Icon={Quote}
          title="blockquote"
          active={editor.isActive('blockquote')}
          onPress={() => editor.chain().focus().toggleBlockquote().run()}
        />
        <EditorButton
          Icon={Code2}
          title="codeBlock"
          active={editor.isActive('codeBlock')}
          onPress={() => editor.chain().focus().toggleCodeBlock().run()}
        />
      </div>
      <div>
        <EditorButton
          Icon={ListOrdered}
          title="Ordered List"
          active={editor.isActive('orderedList')}
          onPress={() => editor.chain().focus().toggleOrderedList().run()}
        />
        <EditorButton
          Icon={List}
          title="Bullet List"
          active={editor.isActive('bulletList')}
          onPress={() => editor.chain().focus().toggleBulletList().run()}
        />
      </div>
      <div>
        <EditorButton
          Icon={AlignLeft}
          title="Align Left"
          active={editor.isActive({ textAlign: 'left' })}
          onPress={() => editor.chain().focus().setTextAlign('left').run()}
        />
        <EditorButton
          Icon={AlignJustify}
          title="Justify"
          active={editor.isActive({ textAlign: 'justify' })}
          onPress={() => editor.chain().focus().setTextAlign('justify').run()}
        />
        <EditorButton
          Icon={AlignCenter}
          title="Align Center"
          active={editor.isActive({ textAlign: 'center' })}
          onPress={() => editor.chain().focus().setTextAlign('center').run()}
        />
        <EditorButton
          Icon={AlignRight}
          title="Align Right"
          active={editor.isActive({ textAlign: 'right' })}
          onPress={() => editor.chain().focus().setTextAlign('right').run()}
        />
      </div>
      <div className="inline-flex flex-1 justify-end">
        <EditorButton
          variant="button"
          Icon={RemoveFormatting}
          title="Clear Formatting"
          onPress={() =>
            editor.chain().focus().unsetAllMarks().clearNodes().run()
          }
        />
        <EditorButton
          Icon={Trash}
          variant="button"
          title="Clear Editor"
          onPress={() => editor.chain().focus().clearContent().run()}
        />
      </div>
    </Toolbar.Root>
  );
}
