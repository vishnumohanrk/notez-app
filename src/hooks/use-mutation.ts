import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export function useMutation() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  function mutate(...args: Parameters<typeof fetch>) {
    setIsFetching(true);
    fetch(...args)
      .then((res) => res.json())
      .then((res) => {
        setIsFetching(false);

        startTransition(() => {
          router.refresh();

          // redirect not working in route handlers
          if (res.url) {
            router.push(res.url);
          }
        });
      });
  }

  return {
    mutate,
    isMutating,
  };
}
