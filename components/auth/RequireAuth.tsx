'use client';

import { useAuth } from '@/auth/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const accessToken = useAuth((s) => s.accessToken);
  const hydrated = useAuth((s) => s.hydrated);
  const router = useRouter();

  useEffect(() => {
    if (hydrated && !accessToken) {
      router.replace('/');
    }
  }, [hydrated, accessToken, router]);
  if (!hydrated) return null;
  if (!accessToken) return null;

  return <>{children}</>;
}
