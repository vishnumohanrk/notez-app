import 'server-only';

import type { Note } from '@prisma/client';
import { notFound } from 'next/navigation';

import { getUser } from './auth';
import { db } from './db';

export async function getAllNotes() {
  const user = await getUser();

  const notes = await db.note.findMany({
    where: { user: { email: user?.email } },
  });

  return notes;
}

export async function getNoteById(id: string) {
  const user = await getUser();

  const note = await db.note.findFirst({
    where: { AND: { id, user: { email: user?.email } } },
  });

  if (!note) {
    notFound();
  }

  return note;
}

export async function createNote({
  html,
  text,
  title,
}: Pick<Note, 'html' | 'text' | 'title'>) {
  const user = await getUser();

  if (!user?.email) {
    throw new Error('Unable to create Note');
  }

  const note = await db.note.create({
    data: { html, text, title, user: { connect: { email: user.email } } },
  });

  return note;
}

export async function deleteNote(id: string) {
  await getUser();
  await db.note.delete({ where: { id } });
}

export async function updateNote({
  id,
  html,
  text,
  title,
}: Pick<Note, 'id' | 'html' | 'text' | 'title'>) {
  await getUser();
  const data = title ? { title } : { html, text };

  const note = await db.note.update({
    where: { id },
    data,
  });

  return note;
}

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
