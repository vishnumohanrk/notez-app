import { Login } from '@/components/shared/login';
import { PageCenter } from '@/components/shared/page-center';

export const metadata = {
  title: 'Sign In to Continue to app',
};

export default function LoginPage() {
  return (
    <PageCenter text="Log In to Continue">
      <Login />
    </PageCenter>
  );
}
