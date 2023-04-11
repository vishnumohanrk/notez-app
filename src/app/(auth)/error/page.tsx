import Login from '@/components/login';
import { PageCenter } from '@/components/page-center';

export default function AuthErrorPage() {
  return (
    <PageCenter text="An Error Occured during Authentication">
      <Login text="Try Again" />
    </PageCenter>
  );
}
