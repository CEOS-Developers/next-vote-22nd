import { apiPrivate, apiPublic } from '../api/client';

export const authService = {
  // 일반 로그인
  login: async (loginId: string, password: string) => {
    const res = await apiPublic.post<{
      isSuccess: boolean;
      message: string;
      statusCode: number;
      payload: {
        memberId: string;
        name: string;
        part: 'FRONTEND' | 'BACKEND';
        team: string;
        accessToken: string;
        expiresIn: number;
      };
    }>('/auth/login', {
      loginId,
      password,
    });
    console.log(res.data.payload);
    return res.data.payload;
  },

  //회원가입
  signup: async (data: {
    loginId: string;
    password: string;
    email: string;
    part: 'FRONTEND' | 'BACKEND';
    name: string;
    team: string;
  }) => {
    const res = await apiPublic.post<{
      isSuccess: boolean;
      message: string;
      statusCode: number;
      payload: {
        memberId: string;
        name: string;
        part: 'FRONTEND' | 'BACKEND';
        team: string;
        accessToken: string;
        expiresIn: number;
      };
    }>('/auth/signup', data);
    console.log(res.data.payload);
    return res.data.payload;
  },
  logout: async () => {
    const res = await apiPrivate.post<{
      isSuccess: boolean;
      message: string;
      statusCode: number;
      payload: {
        memberId: string;
      };
    }>('/auth/logout');
    console.log(res.data);
    return res.data;
  },
  reissue: async () => {
    const res = await apiPrivate.post<{
      isSuccess: boolean;
      message: string;
      statusCode: number;
      payload: {
        accessToken: string;
        expiresIn: number;
      };
    }>('/auth/reissue');

    return res.data.payload;
  },
};
