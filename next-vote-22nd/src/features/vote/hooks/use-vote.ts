// src/features/vote/hooks/use-vote.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { voteRepository } from '../api/vote.repository';

// Query Keys
export const voteKeys = {
  all: ['votes'] as const,
  partLeader: () => [...voteKeys.all, 'part-leader'] as const,
  demoDay: () => [...voteKeys.all, 'demo-day'] as const,
};

// 투표하기 Hook
export function useVote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (candidateId: number) => voteRepository.vote(candidateId),
    onSuccess: () => {
      // 투표 후 후보자 목록 다시 가져오기
      queryClient.invalidateQueries({ queryKey: voteKeys.all });
    },
    onError: (error: any) => {
      console.error('Vote failed:', error);
    },
  });
}

// 파트장 후보 목록 조회 Hook
export function usePartLeaderCandidates() {
  return useQuery({
    queryKey: voteKeys.partLeader(),
    queryFn: () => voteRepository.getPartLeaderCandidates(),
    staleTime: 30 * 1000, // 30초
  });
}

// 데모데이 후보 목록 조회 Hook
export function useDemoDayCandidates() {
  return useQuery({
    queryKey: voteKeys.demoDay(),
    queryFn: () => voteRepository.getDemoDayCandidates(),
    staleTime: 30 * 1000, // 30초
  });
}
