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

function getSupabaseRSC() {
  return createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
}

export async function getAllNotes() {
  const supabase = getSupabaseRSC();

  const { data: notes } = await supabase
    .from('notes')
    .select('*')
    .order('id', { ascending: false });

  return notes;
}

export async function getNoteById(id: string) {
  const supabase = getSupabaseRSC();

  const { data } = await supabase.from('notes').select().match({ id }).single();

  if (!data) {
    notFound();
  }

  return data;
}

export async function searchNotes(query: string | string[] | undefined) {
  if (!query) return null;

  const text = decodeURIComponent(typeof query === 'string' ? query : query[0]);
  const search = text.replace(' ', '|');

  const supabase = getSupabaseRSC();

  const { data, error } = await supabase
    .from('notes')
    .select()
    .textSearch('text', search);

  if (error) return null;

  return data;
}
