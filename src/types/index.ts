import type { Note } from '@prisma/client';

import type { NoteListSelect } from '@/lib/constants';

export type TNoteListSelect = Pick<Note, keyof typeof NoteListSelect>;

export type TForm = Pick<Note, 'title' | 'noteJSON' | 'noteText'>;
