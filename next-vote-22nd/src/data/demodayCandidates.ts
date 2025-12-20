// src/data/demodayCandidates.ts

export interface DemodayCandidate {
  id: number;
  team: string;
  name: string;
  votes: number;
}

// 데모데이 후보 (팀 단위)
export const demodayCandidates: DemodayCandidate[] = [
  { id: 101, team: 'STORIX', name: 'STORIX', votes: 0 },
  { id: 102, team: 'DiggIndie', name: 'DiggIndie', votes: 0 },
  { id: 103, team: 'CatchUp', name: 'CatchUp', votes: 0 },
  { id: 104, team: 'Modelly', name: 'Modelly', votes: 0 },
  { id: 105, team: 'Menual', name: 'Menual', votes: 0 },
];
