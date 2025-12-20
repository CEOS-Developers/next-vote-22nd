// src/features/auth/stores/auth-store.ts
import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  userId: string | null;
  setTokens: (accessToken: string, refreshToken: string) => void;
  setUserId: (userId: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

// ✅ store 초기 accessToken을 sessionStorage에서 복구
const initialAccessToken =
  typeof window !== 'undefined' ? sessionStorage.getItem('accessToken') : null;

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: initialAccessToken,
  userId: null,

  setTokens: (accessToken: string, refreshToken: string) => {
    set({ accessToken });

    // ✅ AccessToken / RefreshToken 둘 다 sessionStorage에 저장
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
    }
  },

  setUserId: (userId: string) => {
    set({ userId });
    if (typeof window !== 'undefined') {
      localStorage.setItem('userId', userId);
    }
  },

  logout: () => {
    set({ accessToken: null, userId: null });
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      localStorage.removeItem('userId');
    }
  },

  isAuthenticated: () => {
    return !!get().accessToken;
  },
}));
