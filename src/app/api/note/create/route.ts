import { NextResponse } from 'next/server';

import { getUser } from '@/lib/auth';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  const user = await getUser();

  if (!user || !user.email) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 403 });
  }

  const { title, html, text } = await req.json();

  const note = await db.note.create({
    data: {
      html,
      text,
      title,
      user: { connect: { email: user.email } },
    },
  });

  return NextResponse.json({ url: `/note/${note.id}` });
}
