// src/features/vote/schemas/vote.schema.ts
import { z } from 'zod';

// 백엔드 공통 응답 래퍼 스키마
export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    isSuccess: z.boolean(),
    code: z.string(),
    message: z.string(),
    result: dataSchema,
    timestamp: z.string().optional(),
  });

// 투표 요청 스키마
export const voteRequestSchema = z.object({
  candidateId: z.number().positive('후보자를 선택해주세요'),
});

export type VoteRequest = z.infer<typeof voteRequestSchema>;

// 후보자 스키마
export const candidateSchema = z.object({
  id: z.number(),
  name: z.string(),
  team: z.string().optional(),
  part: z.string().optional(),
  description: z.string().optional(),
  voteCount: z.number(),
});

export type Candidate = z.infer<typeof candidateSchema>;

// 프론트엔드에서 사용할 후보자 타입 (매핑 후)
export interface CandidateDisplay {
  id: number;
  name: string;
  team: string;
  part?: string;
  votes: number;
}

// 후보자 목록 응답 스키마
export const candidatesResponseSchema = apiResponseSchema(
  z.array(candidateSchema)
);
