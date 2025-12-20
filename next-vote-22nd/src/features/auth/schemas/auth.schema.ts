// src/features/auth/schemas/auth.schema.ts
import { z } from 'zod';

// 로그인 스키마
export const loginSchema = z.object({
  loginId: z.string().min(1, '아이디를 입력해주세요'),
  password: z.string().min(1, '비밀번호를 입력해주세요'),
});

export type LoginInput = z.infer<typeof loginSchema>;

// 회원가입 스키마
export const signupSchema = z.object({
  loginId: z.string().min(3, '아이디는 최소 3자 이상이어야 합니다'),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
  email: z.string().email('올바른 이메일 형식이 아닙니다'),
  part: z.enum(['FE', 'BE']),
  name: z.string().min(1, '이름을 입력해주세요'),
  team: z.enum(['DIGGINDIE', 'MODELLY', 'CATCHUP', 'GROOMEASY', 'STORIX']),
});

export type SignupInput = z.infer<typeof signupSchema>;

// 백엔드 공통 응답 래퍼 스키마
export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    isSuccess: z.boolean(),
    code: z.string(),
    message: z.string(),
    result: dataSchema,
    timestamp: z.string(),
  });

// 로그인 결과 데이터 스키마
export const loginResultSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

// 로그인 전체 응답 스키마
export const loginResponseSchema = apiResponseSchema(loginResultSchema);

export type LoginResponse = z.infer<typeof loginResultSchema>;

// 회원가입 결과 데이터 스키마
export const signupResultSchema = z.object({
  userId: z.number(),
  loginId: z.string(),
  name: z.string(),
});

// 회원가입 전체 응답 스키마
export const signupResponseSchema = apiResponseSchema(signupResultSchema);

export type SignupResponse = z.infer<typeof signupResultSchema>;
