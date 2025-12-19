// lib/mappers/vote.ts
import type { candidateResponse } from "@/types/vote";

export type LeaderCandidateDto = {
  candidateId: number;
  candidateName: string;
  candidatePart: "FRONTEND" | "BACKEND";
};

export function mapLeaderCandidateDto(dto: LeaderCandidateDto): candidateResponse {
  return {
    id: String(dto.candidateId),
    name: dto.candidateName,
    teamName: dto.candidatePart,
  };
}

//결과 DTO
export type LeaderResultDto = {
  candidateId: number;
  candidateName: string;
  candidatePart: "FRONTEND" | "BACKEND";
  currentVote: number;
};

export function mapLeaderResultDto(dto: LeaderResultDto): candidateResponse {
  return {
    id: String(dto.candidateId),
    name: dto.candidateName,
    teamName: dto.candidatePart,
    votes: dto.currentVote,
  };
}
