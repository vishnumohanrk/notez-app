import type { Prisma } from '@prisma/client';

export const NoteListSelect = {
  id: true,
  title: true,
  noteText: true,
  createdAt: true,
} satisfies Prisma.NoteSelect;
