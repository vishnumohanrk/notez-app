import { getUser } from '@/lib/auth';

export default async function AppHome() {
  await getUser();

  // each slots' default.tsx will be rendered
  return null;
}
