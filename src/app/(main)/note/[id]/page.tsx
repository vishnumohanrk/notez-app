import dynamic from 'next/dynamic';

const NoteEditor = dynamic(() => import('@/components/note/editor'));

export default function NoteIDPage() {
  return <NoteEditor />;
}
