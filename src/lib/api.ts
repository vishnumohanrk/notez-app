import 'server-only';

import { notFound } from 'next/navigation';
import { cache } from 'react';

import { getUser } from './auth';
import { db } from './db';

export async function getAllNotes() {
  const user = await getUser();

  const notes = await db.note.findMany({
    where: { user: { email: user?.email } },
  });

  return notes;
}

export const getNoteById = cache(async (id: string) => {
  const user = await getUser();

  const note = await db.note.findFirst({
    where: { AND: { id, user: { email: user?.email } } },
  });

  if (!note) {
    notFound();
  }

  return note;
});

export async function searchNotes(query: string | string[] | undefined) {
  if (!query) return null;

  const search = decodeURIComponent(
    typeof query === 'string' ? query : query[0]
  );

  const user = await getUser();

  const notes = await db.note.findMany({
    where: {
      AND: {
        user: { email: user?.email },
        OR: { text: { search }, title: { search } },
      },
    },
  });

  return notes;
}
