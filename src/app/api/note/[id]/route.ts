import { NextResponse } from 'next/server';

import { getUser } from '@/lib/auth';
import { db } from '@/lib/db';

type TParams = {
  params: { id: string };
};

export async function PUT(req: Request, { params }: TParams) {
  const user = await getUser();

  if (!user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 403 });
  }

  const { title, html, text } = await req.json();
  const data = title ? { title } : { html, text };

  await db.note.update({
    where: { id: params.id },
    data,
  });

  return NextResponse.json({ url: '' });
}

export async function DELETE(_: Request, { params }: TParams) {
  const user = await getUser();

  if (!user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 403 });
  }

  await db.note.delete({ where: { id: params.id } });
  return NextResponse.json({ url: '/note' });
}
