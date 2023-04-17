import 'server-only';

import {
  createRouteHandlerSupabaseClient,
  createServerComponentSupabaseClient,
} from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';
import { notFound } from 'next/navigation';
import invariant from 'tiny-invariant';

import type { Database } from './db-types';

export async function getRouteHandlerSBAndUser() {
  const supabase = createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  invariant(session?.user);

  return { supabase, user: session.user };
}

export async function getAllNotes() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const { data: notes } = await supabase
    .from('notes')
    .select('*')
    .order('id', { ascending: false });

  return notes;
}

export async function getNoteById(id: string) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const { data } = await supabase.from('notes').select().match({ id }).single();

  if (!data) {
    notFound();
  }

  return data;
}
