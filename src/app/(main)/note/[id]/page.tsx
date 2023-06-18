import dynamic from 'next/dynamic';

import { DeleteNote } from '@/components/note/delete';
import { NoteHeader } from '@/components/note/header';
import { NoteTitle } from '@/components/note/title';
import { Time } from '@/components/shared/time';

const NoteEditor = dynamic(() => import('@/components/note/editor'));

export default function NoteIDPage() {
  return (
    <>
      <NoteHeader>
        <NoteTitle title="Lorem Ipsum" />
      </NoteHeader>
      <div className="mb-2 flex justify-between text-sm text-neutral-400">
        <p>
          Last Edited on <Time date={new Date()} />
        </p>
        <DeleteNote id="q12323" />
      </div>
      <NoteEditor />
    </>
  );
}
