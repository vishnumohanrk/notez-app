import type { Database } from './db-types';

export type TNote = Database['public']['Tables']['notes']['Row'];

export type TUser = {
  name: string;
  email: string;
  avatar_url: string;
};

export const TITLE_CLASS =
  'h-12 flex-1 line-clamp-1 text-4xl font-bold leading-tight';
