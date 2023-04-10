import { Login } from '@/components/login';
import { getUser } from '@/lib/auth';

export default async function AppHome() {
  const user = await getUser();

  return (
    <main className="grid place-items-center">
      <Login isLoggedin={!!user} />
      {user ? (
        <div className="flex gap-2">
          <img
            alt="avatar"
            src={user.image || ''}
            className="h-12 w-12 rounded-full"
          />
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
