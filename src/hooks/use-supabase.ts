import { useContext } from 'react';

import { SBContext } from '@/lib/supabase-provider';

export const useSupabase = () => {
  const context = useContext(SBContext);

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider');
  }

  return context;
};
