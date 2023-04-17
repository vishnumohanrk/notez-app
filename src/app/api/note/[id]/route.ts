import { NextResponse } from 'next/server';

import { getRouteHandlerSBAndUser } from '@/lib/api';

type TParams = {
  params: { id: string };
};

export async function PUT(req: Request, { params }: TParams) {
  const { title, html, text } = await req.json();

  const updates = title ? { title } : { html, text };
  const { supabase } = await getRouteHandlerSBAndUser();

  const { error } = await supabase
    .from('notes')
    .update(updates)
    .eq('id', params.id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return NextResponse.json({ url: '' });
}

export async function DELETE(req: Request, { params }: TParams) {
  const { supabase } = await getRouteHandlerSBAndUser();

  const { error } = await supabase.from('notes').delete().eq('id', params.id);

  if (error) {
    throw new Error(error.message);
  }

  return NextResponse.json({ url: '/' });
}
