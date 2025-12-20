// src/features/vote/api/vote.repository.ts
import { apiClient } from '@/lib/axios';
import { Candidate, candidatesResponseSchema } from '../schemas/vote.schema';

export const voteRepository = {
  // 투표하기
  async vote(candidateId: number): Promise<string> {
    console.log('🔍 Vote Request - candidateId:', candidateId);
    console.log('🔍 Vote Request - type:', typeof candidateId);

    const requestData = { candidateId };
    console.log('🔍 Vote Request - data:', requestData);

    try {
      const response = await apiClient.post('/api/v1/votes', requestData);

      console.log('✅ Vote Response:', response.data);
      return response.data?.message || 'Vote successful';
    } catch (error: any) {
      console.error('❌ Vote Error - Full:', error);
      console.error('❌ Vote Error - Response:', error.response?.data);
      console.error('❌ Vote Error - Status:', error.response?.status);
      console.error('❌ Vote Error - Headers:', error.response?.headers);
      throw error;
    }
  },

  // 파트장 후보 목록 조회 (득표순 정렬)
  async getPartLeaderCandidates(): Promise<Candidate[]> {
    try {
      const response = await apiClient.get('/api/v1/votes/part-leader');

      console.log('🔍 Part Leader Response:', response.data);

      const { result } = response.data;

      if (!result || !Array.isArray(result)) {
        console.error('🔴 Invalid result format:', response.data);
        return [];
      }

      // 백엔드 키 이름을 프론트엔드 형식으로 변환
      const candidates = result.map((item: any) => ({
        id: item.id,
        name: item.name,
        team: item.description, // description이 실제로는 파트 정보
        votes: item.voteCount,
      }));

      console.log('✅ Mapped Part Leader Candidates:', candidates);
      return candidates;
    } catch (error) {
      console.error('❌ Part Leader Error:', error);
      return [];
    }
  },

  // 데모데이 후보 목록 조회 (득표순 정렬)
  async getDemoDayCandidates(): Promise<Candidate[]> {
    try {
      const response = await apiClient.get('/api/v1/votes/demo-day');

      console.log('🔍 Demo Day Response:', response.data);

      const { result } = response.data;

      if (!result || !Array.isArray(result)) {
        console.error('🔴 Invalid result format:', response.data);
        return [];
      }

      // 데모데이는 팀 정보가 있을 것으로 예상
      const candidates = result.map((item: any) => ({
        id: item.id,
        name: item.name,
        team: item.team || item.teamName || item.description,
        votes: item.voteCount || item.votes || 0,
      }));

      console.log('✅ Mapped Demo Day Candidates:', candidates);
      return candidates;
    } catch (error) {
      console.error('❌ Demo Day Error:', error);
      return [];
    }
  },
};
