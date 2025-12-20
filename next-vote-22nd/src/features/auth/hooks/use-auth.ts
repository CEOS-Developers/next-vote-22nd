// src/features/auth/hooks/use-auth.ts
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authRepository } from '../api/auth.repository';
import { useAuthStore } from '../stores/auth-store';
import { LoginInput, SignupInput } from '../schemas/auth.schema';

// 로그인 Hook
export function useLogin() {
  const router = useRouter();
  const { setTokens, setUserId } = useAuthStore();

  return useMutation({
    mutationFn: (data: LoginInput) => authRepository.login(data),
    onSuccess: (response, variables) => {
      // 토큰 저장 (AccessToken은 Zustand, RefreshToken은 sessionStorage)
      setTokens(response.accessToken, response.refreshToken);
      // 사용자 ID 저장
      setUserId(variables.loginId);
    },
    onError: (error: any) => {
      console.error('Login failed:', error);
    },
  });
}

// 회원가입 Hook
export function useSignup() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: SignupInput) => authRepository.signup(data),
    onSuccess: () => {
      // 회원가입 성공 후 로그인 페이지로 이동은 컴포넌트에서 처리
    },
    onError: (error: any) => {
      console.error('Signup failed:', error);
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
      logout();
      router.push('/login');
    },
    onError: (error: any) => {
      console.error('Logout failed:', error);
      // 로그아웃 실패해도 로컬 토큰은 삭제
      logout();
      router.push('/login');
    },
  });
}
