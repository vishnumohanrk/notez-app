import 'server-only';

import Link from 'next/link';

export function PageCenter({
  text,
  children,
}: React.PropsWithChildren<{ text: string }>) {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-semibold tracking-wide text-slate-400">
        {text}
      </h2>
      <div className="my-4">
        {children || (
          <Link href="/note" className="font-medium underline">
            Go Home
          </Link>
        )}
      </div>
    </div>
  );
}
