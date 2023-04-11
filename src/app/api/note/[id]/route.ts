import { NextResponse } from 'next/server';

import { deleteNote, updateNote } from '@/lib/api';

type TParams = {
  params: { id: string };
};

export async function PUT(req: Request, { params }: TParams) {
  const { title, html, text } = await req.json();

  await updateNote({ id: params.id, html, text, title });

  return NextResponse.json({ url: '' });
}

export async function DELETE(_: Request, { params }: TParams) {
  await deleteNote(params.id);
  return NextResponse.json({ url: '/note' });
}
