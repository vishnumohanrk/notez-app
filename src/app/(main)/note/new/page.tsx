import dynamic from 'next/dynamic';

import { NoteHeader } from '@/components/note/header';
import { ButtonGroup } from '@/components/shared/button-group';
import { FormButton } from '@/components/shared/form-button';
import { FormInput } from '@/components/shared/form-input';

const NoteEditor = dynamic(() => import('@/components/note/editor'));

export default function NewNotePage() {
  return (
    <>
      <NoteHeader>
        <FormInput
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          name="title"
          className="px-4"
          label="Enter Note Title"
        />
      </NoteHeader>
      <NoteEditor />
      <ButtonGroup className="mt-4">
        <FormButton variant="primary">Create Note</FormButton>
      </ButtonGroup>
    </>
  );
}
