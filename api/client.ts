import axios from 'axios';
import { useAuth } from '@/auth/authStore';

const API_BASE = process.env.NEXT_PUBLIC_BASE_URL;

// 인증 필요 없는 API
export const apiPublic = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // refresh token 쿠키 전송
});

// 인증 필요한 API
export const apiPrivate = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

// 요청 인터셉터: 토큰 자동 부착
apiPrivate.interceptors.request.use((config) => {
  const token = useAuth.getState().getToken();
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 401 → 로그아웃 유도 (필요 시 확장: 리프레시 등)
apiPrivate.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      useAuth.getState().logout();
      // 여기서 라우터 접근이 어려우므로, 화면에서는 isAuthed false로 자연스런 리다이렉트 유도
    }
    return Promise.reject(err);
  },
);
