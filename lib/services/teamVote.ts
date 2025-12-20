// lib/services/teamVote.ts
import { apiFetch, type ApiResponse } from "@/lib/api/client";
import type { teamResponse } from "@/types/teamVote";
import {
  mapTeamDto,
  mapTeamVoteResultDto,
  type TeamDto,
  type TeamVoteResultDto,
} from "@/lib/mappers/teamVote";

//팀목록 조회
type TeamListPayload = {
  teams: TeamDto[];
};

export async function getTeams(accessToken: string): Promise<teamResponse[]> {
  const res = await apiFetch<ApiResponse<TeamListPayload>>(`/teams`, {
    accessToken,
  });

  const raw = res.payload?.teams ?? [];
  return raw.map(mapTeamDto);
}

//투표
type VoteTeamRequest = {
  teamId: number;
};

type VoteTeamPayload = unknown;

export async function voteTeam(
  teamId: number,
  accessToken: string
): Promise<ApiResponse<VoteTeamPayload>> {
  return await apiFetch<ApiResponse<VoteTeamPayload>>(`/votes/teams`, {
    method: "POST",
    accessToken,
    body: JSON.stringify({ teamId } satisfies VoteTeamRequest),
  });
}

// 데모데이 결과조회
type TeamResultsPayload = {
  teamVoteResults: TeamVoteResultDto[];
};

export async function getTeamResults(accessToken: string): Promise<teamResponse[]> {
  const res = await apiFetch<ApiResponse<TeamResultsPayload>>(`/votes/teams/results`, {
    accessToken,
  });

  const raw = res.payload?.teamVoteResults ?? [];
  return raw.map(mapTeamVoteResultDto);
}

export function sortByVotesDesc(list: teamResponse[]): teamResponse[] {
  return [...list].sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0));
}
