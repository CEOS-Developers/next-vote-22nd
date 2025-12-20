// src/features/auth/api/auth.repository.ts
import { apiClient } from '@/lib/axios';
import {
  LoginInput,
  SignupInput,
  LoginResponse,
  SignupResponse,
  loginResponseSchema,
  signupResponseSchema,
} from '../schemas/auth.schema';

export const authRepository = {
  // 로그인
  async login(data: LoginInput): Promise<LoginResponse> {
    const response = await apiClient.post('/api/v1/auth/user/login', data);

    // 🔍 디버깅: 실제 응답 확인
    console.log('🔍 Login API Response:', response);
    console.log('🔍 Response Data:', response.data);
    console.log('🔍 Response Data Type:', typeof response.data);

    // 백엔드 응답 검증 및 result 추출
    const validatedResponse = loginResponseSchema.parse(response.data);
    return validatedResponse.result;
  },

  // 회원가입
  async signup(data: SignupInput): Promise<SignupResponse> {
    const response = await apiClient.post('/api/v1/auth/user/signup', data);

    console.log('🔍 Signup API Response:', response.data);

    // 백엔드 응답 검증 및 result 추출
    const validatedResponse = signupResponseSchema.parse(response.data);
    return validatedResponse.result;
  },

  // 로그아웃
  async logout(refreshToken: string): Promise<string> {
    const response = await apiClient.post('/api/v1/auth/user/logout', {
      refreshToken,
    });

    // 로그아웃은 단순 메시지 반환
    return response.data?.message || 'Logout successful';
  },

  // 토큰 갱신
  async refreshToken(refreshToken: string): Promise<LoginResponse> {
    const response = await apiClient.post('/api/v1/auth/refresh_token', {
      refreshToken,
    });

    // 백엔드 응답 검증 및 result 추출
    const validatedResponse = loginResponseSchema.parse(response.data);
    return validatedResponse.result;
  },

  // 팀 목록 조회
  async getTeams(): Promise<string[]> {
    const response = await apiClient.get('/api/v1/auth/user/team');
    return response.data?.result || response.data;
  },

  // 파트 목록 조회
  async getParts(): Promise<string[]> {
    const response = await apiClient.get('/api/v1/auth/user/part');
    return response.data?.result || response.data;
  },
};
