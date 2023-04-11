import 'server-only';

import { getUser } from '@/lib/auth';

import { UserProfilePopover } from './user-profile-popover';

export async function UserProfile() {
  const user = await getUser();

  return <UserProfilePopover {...user} />;
}
