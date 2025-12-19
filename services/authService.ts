import { apiPublic } from '../api/client';

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
    alert('로그인 성공');
    return res.data.payload;
  },

  //회원가입
  signup: async (data: {
    loginId: string;
    password: string;
    email: string;
    part: 'BACKEND' | 'FRONTEND';
    name: string;
    team: string;
  }) => {
    const res = await apiPublic.post('/auth/signup', data);
    return res.data;
  },
};
