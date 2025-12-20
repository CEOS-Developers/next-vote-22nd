// src/features/vote/schemas/vote.schema.ts
import { z } from 'zod';

// 투표 요청 스키마
export const voteRequestSchema = z.object({
  candidateId: z.number().positive('후보자를 선택해주세요'),
});

export type VoteRequest = z.infer<typeof voteRequestSchema>;

// 후보자 스키마
export const candidateSchema = z.object({
  id: z.number(),
  name: z.string(),
  team: z.string(),
  votes: z.number(),
});

export type Candidate = z.infer<typeof candidateSchema>;

// 후보자 목록 응답 스키마
export const candidatesResponseSchema = z.array(candidateSchema);

export type CandidatesResponse = z.infer<typeof candidatesResponseSchema>;
