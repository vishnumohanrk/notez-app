import Login from '@/components/login';
import { PageCenter } from '@/components/page-center';

export default function SignedOutPage() {
  return (
    <PageCenter text="Successfully Logged Out">
      <Login text="Log In Again" />
    </PageCenter>
  );
}
