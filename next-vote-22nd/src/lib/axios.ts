// src/lib/axios.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/features/auth/stores/auth-store';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 1) store 토큰 우선
    const storeToken = useAuthStore.getState().accessToken;

    // 2) store에 없으면 sessionStorage fallback (클라이언트에서만)
    const sessionToken =
      typeof window !== 'undefined'
        ? sessionStorage.getItem('accessToken')
        : null;

    const token = storeToken || sessionToken;

    console.log('🔍 Request URL:', config.url);
    console.log('🔍 Current Token from Store:', storeToken);
    console.log('🔍 Current Token from Session:', sessionToken);

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(
        '✅ Authorization Header Added:',
        config.headers.Authorization
      );
    } else {
      console.warn('⚠️ No token available or headers missing');
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor는 그대로
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = sessionStorage.getItem('refreshToken');
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        const response = await axios.post(
          `${API_BASE_URL}/api/v1/auth/refresh_token`,
          { refreshToken }
        );

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        useAuthStore.getState().setTokens(accessToken, newRefreshToken);

        // ✅ 여기에도 accessToken 저장 추가 (중요)
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', newRefreshToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }
        return apiClient(originalRequest);
      } catch (refreshError) {
        useAuthStore.getState().logout();
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
