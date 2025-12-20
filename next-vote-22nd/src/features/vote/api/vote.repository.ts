// src/features/vote/api/vote.repository.ts
import { apiClient } from '@/lib/axios';
import {
  CandidateDisplay,
  candidatesResponseSchema,
} from '../schemas/vote.schema';

export const voteRepository = {
  // 투표하기
  async vote(candidateId: number): Promise<string> {
    console.log('🔍 Vote Request - candidateId:', candidateId);
    console.log('🔍 Vote Request - type:', typeof candidateId);

    const requestData = { candidateId };
    console.log('🔍 Vote Request - data:', requestData);

    const response = await apiClient.post('/api/v1/votes', requestData);

    console.log('🔍 Vote Response:', response.data);

    // 투표 응답은 message만 반환
    return response.data?.message || 'Vote successful';
  },

  // 파트장 후보 목록 조회 (득표순 정렬)
  async getPartLeaderCandidates(): Promise<CandidateDisplay[]> {
    const response = await apiClient.get('/api/v1/votes/part-leader');

    console.log('🔍 Part Leader Response:', response.data);

    // 백엔드 응답 검증
    const validatedResponse = candidatesResponseSchema.parse(response.data);
    const candidates = validatedResponse.result;

    // 백엔드 형식을 프론트엔드 형식으로 매핑
    const mapped = candidates.map((item) => ({
      id: item.id,
      name: item.name,
      team: item.description || item.part || item.team || '',
      part: item.part,
      votes: item.voteCount,
    }));

    console.log('✅ Mapped Part Leader Candidates:', mapped);
    return mapped;
  },

  // 데모데이 후보 목록 조회 (득표순 정렬)
  async getDemoDayCandidates(): Promise<CandidateDisplay[]> {
    const response = await apiClient.get('/api/v1/votes/demo-day');

    console.log('🔍 Demo Day Response:', response.data);

    // 백엔드 응답 검증
    const validatedResponse = candidatesResponseSchema.parse(response.data);
    const candidates = validatedResponse.result;

    // 백엔드 형식을 프론트엔드 형식으로 매핑
    const mapped = candidates.map((item) => ({
      id: item.id,
      name: item.name,
      team: item.team || item.description || '',
      votes: item.voteCount,
    }));

    console.log('✅ Mapped Demo Day Candidates:', mapped);
    return mapped;
  },
};
