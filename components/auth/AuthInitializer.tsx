// AuthInitializer.tsx
'use client';

import { useEffect } from 'react';
import { authService } from '@/services/authService';
import { useAuth } from '@/auth/authStore';

export default function AuthInitializer({ children }: { children: React.ReactNode }) {
  const accessToken = useAuth((s) => s.accessToken);
  useEffect(() => {
    if (accessToken) return;

    (async () => {
      try {
        const { accessToken: newToken } = await authService.reissue();
        useAuth.setState({ accessToken: newToken });
      } catch {
        // 비로그인
      }
    })();
  }, [accessToken]);

  return <>{children}</>;
}
