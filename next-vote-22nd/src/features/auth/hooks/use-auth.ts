// src/features/auth/hooks/use-auth.ts
'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authRepository } from '../api/auth.repository';
import { useAuthStore } from '../stores/auth-store';
import type { LoginInput, SignupInput } from '../schemas/auth.schema';

// 로그인 Hook
export function useLogin() {
  const router = useRouter();
  const { setTokens, setUserId } = useAuthStore();

  return useMutation({
    mutationFn: (data: LoginInput) => authRepository.login(data),

    onSuccess: (response, variables) => {
      // 🔍 디버깅: 응답 데이터 확인
      console.log('🔍 Login Success Response:', response);
      console.log('🔍 Access Token:', response?.accessToken);
      console.log('🔍 Refresh Token:', response?.refreshToken);

      // ✅ 1) Zustand 저장
      setTokens(response.accessToken, response.refreshToken);

      // ✅ 2) sessionStorage에도 저장 (axios interceptor fallback용)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('accessToken', response.accessToken);
        sessionStorage.setItem('refreshToken', response.refreshToken);
      }

      // 🔍 디버깅: 저장 후 확인
      const currentState = useAuthStore.getState();
      console.log(
        '🔍 Zustand accessToken after save:',
        currentState.accessToken
      );
      console.log(
        '🔍 SessionStorage accessToken:',
        typeof window !== 'undefined'
          ? sessionStorage.getItem('accessToken')
          : null
      );
      console.log(
        '🔍 SessionStorage refreshToken:',
        typeof window !== 'undefined'
          ? sessionStorage.getItem('refreshToken')
          : null
      );

      // 사용자 ID 저장
      setUserId(variables.loginId);

      // (선택) 로그인 후 이동이 필요하면 여기서 처리
      // router.push('/');
    },

    onError: (error: any) => {
      console.error('❌ Login failed:', error);
      console.error('❌ Error response:', error?.response?.data);
    },
  });
}

// 회원가입 Hook
export function useSignup() {
  // const router = useRouter();

  return useMutation({
    mutationFn: (data: SignupInput) => authRepository.signup(data),

    onSuccess: () => {
      // 회원가입 성공 후 이동은 컴포넌트에서 처리
      // router.push('/login');
    },

    onError: (error: any) => {
      console.error('❌ Signup failed:', error);
      console.error('❌ Error response:', error?.response?.data);
    },
  });
}

// 로그아웃 Hook
export function useLogout() {
  const router = useRouter();
  const { logout } = useAuthStore();

  return useMutation({
    mutationFn: (refreshToken: string) => authRepository.logout(refreshToken),

    onSuccess: () => {
      // ✅ 로컬 토큰 제거
      logout();

      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
      }

      router.push('/login');
    },

    onError: (error: any) => {
      console.error('❌ Logout failed:', error);
      console.error('❌ Error response:', error?.response?.data);

      // 실패해도 로컬 토큰은 삭제
      logout();

      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
      }

      router.push('/login');
    },
  });
}
