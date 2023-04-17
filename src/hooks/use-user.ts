import { useEffect, useState } from 'react';

import type { TUser } from '@/lib/utils';

import { useSupabase } from './use-supabase';

export function useUser() {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then((res) => {
      const user = res.data.user;

      if (user) {
        const { avatar_url, email, name } = user.user_metadata as TUser;
        setUser({ avatar_url, email, name });
      }
    });
  }, [supabase]);

  async function logout() {
    await supabase.auth.signOut();
  }

  return { user, logout };
}
