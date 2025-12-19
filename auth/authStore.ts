import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { User } from '@/types/vote';

type AuthState = {
  accessToken: string | null;
  user: User | null;

  login: (token: string, user: User) => void;
  logout: () => void;
  getToken: () => string | null;
};

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      user: null,

      login: (token, user) => set({ accessToken: token, user }),
      logout: () => set({ accessToken: null, user: null }),
      getToken: () => get().accessToken,
    }),
    {
      name: 'accessToken',
      partialize: (s) => ({ accessToken: s.accessToken }),
    },
  ),
);

// 로그인 여부 체크
export const useIsAuthed = () => {
  const accessToken = useAuth((s) => s.accessToken);
  return !!accessToken;
};
