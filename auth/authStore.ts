import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { User } from '@/types/vote';

type AuthState = {
  accessToken: string | null;
  user: User | null;
  hydrated: boolean;

  login: (token: string, user: User) => void;
  logout: () => void;
  getToken: () => string | null;
};

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      user: null,
      hydrated: false,

      login: (token, user) => set({ accessToken: token, user }),
      logout: () => set({ accessToken: null, user: null }),
      getToken: () => get().accessToken,
    }),
    {
      name: 'accessToken',
      partialize: (s) => ({ accessToken: s.accessToken }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true;
        }
      },
    },
  ),
);

// 로그인 여부 체크
//access토큰 여부로 판단하지 않음
export const useIsAuthed = () => {
  const accessToken = useAuth((s) => s.accessToken);
  return !!accessToken;
};
