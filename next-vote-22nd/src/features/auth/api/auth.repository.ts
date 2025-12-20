// src/features/auth/api/auth.repository.ts
import { apiClient } from '@/lib/axios';
import {
  LoginInput,
  SignupInput,
  LoginResponse,
  loginResponseSchema,
} from '../schemas/auth.schema';

export const authRepository = {
  // 로그인
  async login(data: LoginInput): Promise<LoginResponse> {
    const response = await apiClient.post('/api/v1/auth/user/login', data);

    // 🔍 디버깅: 실제 응답 데이터 확인
    console.log('🔍 Login Response Data:', response.data);

    // 백엔드 응답 구조: { isSuccess, code, message, result, timestamp }
    const { result } = response.data;

    if (!result) {
      console.error('🔴 No result in response:', response.data);
      throw new Error('Invalid login response format');
    }

    const loginData: LoginResponse = {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    };

    console.log('✅ Extracted Login Data:', loginData);

    if (!loginData.accessToken || !loginData.refreshToken) {
      console.error('🔴 Missing tokens:', loginData);
      throw new Error('Missing tokens in login response');
    }

    return loginData;
  },

  // 회원가입
  async signup(data: SignupInput): Promise<string> {
    const response = await apiClient.post('/api/v1/auth/user/signup', data);
    return response.data?.message || 'Signup successful';
  },

  // 로그아웃
  async logout(refreshToken: string): Promise<string> {
    const response = await apiClient.post('/api/v1/auth/user/logout', {
      refreshToken,
    });
    return response.data?.message || 'Logout successful';
  },

  // 토큰 갱신
  async refreshToken(refreshToken: string): Promise<LoginResponse> {
    const response = await apiClient.post('/api/v1/auth/refresh_token', {
      refreshToken,
    });

    console.log('🔍 Refresh Token Response:', response.data);

    const { result } = response.data;

    const tokenData: LoginResponse = {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    };

    return tokenData;
  },

  // 팀 목록 조회
  async getTeams(): Promise<string[]> {
    const response = await apiClient.get('/api/v1/auth/user/team');
    // result가 배열이면 그대로, 아니면 response.data
    return response.data?.result || response.data;
  },

  // 파트 목록 조회
  async getParts(): Promise<string[]> {
    const response = await apiClient.get('/api/v1/auth/user/part');
    // result가 배열이면 그대로, 아니면 response.data
    return response.data?.result || response.data;
  },
};
