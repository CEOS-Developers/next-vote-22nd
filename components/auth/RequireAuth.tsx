'use client';

import { useRouter } from 'next/navigation';
import { useIsAuthed } from '@/auth/authStore';
import { useEffect } from 'react';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const isAuthed = useIsAuthed();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthed) {
      router.replace('/');
    }
  }, [isAuthed]);

  if (!isAuthed) return null;

  return <>{children}</>;
}
