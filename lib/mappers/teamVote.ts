// lib/mappers/teamVote.ts
import type { teamResponse } from "@/types/teamVote";

export type TeamDto = {
  teamId: number;
  teamName: string;
  teamProposal?: string;
};

export function mapTeamDto(dto: TeamDto): teamResponse {
  return {
    id: String(dto.teamId),
    name: dto.teamName,
  };
}

// 데모데이 결과 DTO
export type TeamVoteResultDto = {
  teamId: number;
  teamName: string;
  teamProposal: string;
  currentVote: number;
};

export function mapTeamVoteResultDto(dto: TeamVoteResultDto): teamResponse {
  return {
    id: String(dto.teamId),
    name: dto.teamName,
    votes: dto.currentVote,
  };
}
