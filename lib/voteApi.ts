// lib/voteApi.ts
import type { candidateResponse, voteRequest } from "@/types/vote";

export async function submitVote(payload: voteRequest) {
  // 아직 백엔드 협업 미완
  console.log("mock submitVote:", payload);
  await new Promise((res) => setTimeout(res, 500));
}
