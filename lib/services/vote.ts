// lib/services/vote.ts
import { apiFetch, type ApiResponse } from "@/lib/api/client";
import type { candidateResponse } from "@/types/vote";
import {
  mapLeaderCandidateDto,
  mapLeaderResultDto,
  type LeaderCandidateDto,
  type LeaderResultDto,
} from "@/lib/mappers/vote";

//후보 목록 조회
type LeaderCandidatesPayload = {
  part: "FRONTEND" | "BACKEND";
  candidates: LeaderCandidateDto[];
};

export async function getLeaderCandidates(
  part: "FRONTEND" | "BACKEND",
  accessToken: string
): Promise<candidateResponse[]> {
  const res = await apiFetch<ApiResponse<LeaderCandidatesPayload>>(
    `/candidates?part=${part}`,
    { accessToken }
  );

  const raw = res.payload?.candidates ?? [];
  return raw.map(mapLeaderCandidateDto);
}

type VoteLeaderRequest = {
  candidateId: number;
};

type VoteLeaderPayload = unknown;

export async function voteLeader(
  candidateId: number,
  accessToken: string
): Promise<ApiResponse<VoteLeaderPayload>> {
  return await apiFetch<ApiResponse<VoteLeaderPayload>>(`/votes/leaders`, {
    method: "POST",
    accessToken,
    body: JSON.stringify({ candidateId } satisfies VoteLeaderRequest),
  });
}



type LeaderResultsPayload = {
  part: "FRONTEND" | "BACKEND";
  candidates: LeaderResultDto[];
};

export async function getLeaderResults(
  part: "FRONTEND" | "BACKEND",
  accessToken: string
): Promise<candidateResponse[]> {
  const res = await apiFetch<ApiResponse<LeaderResultsPayload>>(
    `/votes/leaders/results?part=${part}`,
    { accessToken }
  );

  const raw = res.payload?.candidates ?? [];
  return raw.map(mapLeaderResultDto);
}


//득표수 정렬
export function sortByVotesDesc(list: candidateResponse[]): candidateResponse[] {
  return [...list].sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0));
}
