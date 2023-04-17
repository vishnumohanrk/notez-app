import { NextResponse } from 'next/server';
import invariant from 'tiny-invariant';

import { getRouteHandlerSBAndUser } from '@/lib/api';

export async function POST(req: Request) {
  const { title, text, html } = await req.json();

  invariant(typeof title === 'string');
  invariant(typeof text === 'string');
  invariant(typeof html === 'string');

  const { supabase, user } = await getRouteHandlerSBAndUser();

  const { data, error } = await supabase
    .from('notes')
    .insert({
      html,
      text,
      title,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  if (data) {
    return NextResponse.json({ url: `/note/${data.id}` });
  }
}
