import { NextResponse } from 'next/server';

import { createNote } from '@/lib/api';

export async function POST(req: Request) {
  const { title, html, text } = await req.json();

  const note = await createNote({ title, html, text });

  return NextResponse.json({ url: `/note/${note.id}` });
}
