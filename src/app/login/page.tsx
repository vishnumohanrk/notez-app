import Login from '@/components/login';
import { PageCenter } from '@/components/page-center';

export default function LoginPage() {
  return (
    <PageCenter text="Please Sign In/Sign Up to use the App">
      <Login />
    </PageCenter>
  );
}
