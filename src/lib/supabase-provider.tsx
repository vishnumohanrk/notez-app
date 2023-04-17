'use client';

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

import type { Database } from '@/lib/db-types';

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

export const SBContext = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [supabase] = useState(() => createBrowserSupabaseClient());

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return (
    <SBContext.Provider value={{ supabase }}>{children}</SBContext.Provider>
  );
}
