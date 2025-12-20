// src/data/partleaderCandidates.ts

export interface PartleaderCandidate {
  id: number;
  team: string;
  name: string;
  part: 'FE' | 'BE';
  votes: number;
}

// 프론트엔드 후보자들
export const feCandidates: PartleaderCandidate[] = [
  { id: 1, team: 'STORIX', name: '김윤성', part: 'FE', votes: 0 },
  { id: 2, team: 'STORIX', name: '이채연', part: 'FE', votes: 0 },
  { id: 3, team: 'DiggIndie', name: '백승선', part: 'FE', votes: 0 },
  { id: 4, team: 'DiggIndie', name: '조성아', part: 'FE', votes: 0 },
  { id: 5, team: 'CatchUp', name: '장자윤', part: 'FE', votes: 0 },
  { id: 6, team: 'CatchUp', name: '정성훈', part: 'FE', votes: 0 },
  { id: 7, team: 'Modelly', name: '손주완', part: 'FE', votes: 0 },
  { id: 8, team: 'Modelly', name: '정윤지', part: 'FE', votes: 0 },
  { id: 9, team: 'Menual', name: '신용섭', part: 'FE', votes: 0 },
  { id: 10, team: 'Menual', name: '최무현', part: 'FE', votes: 0 },
];

// 백엔드 후보자들
export const beCandidates: PartleaderCandidate[] = [
  { id: 11, team: 'STORIX', name: '서가영', part: 'BE', votes: 0 },
  { id: 12, team: 'STORIX', name: '이수아', part: 'BE', votes: 0 },
  { id: 13, team: 'DiggIndie', name: '변호영', part: 'BE', votes: 0 },
  { id: 14, team: 'DiggIndie', name: '이윤지', part: 'BE', votes: 0 },
  { id: 15, team: 'CatchUp', name: '배승식', part: 'BE', votes: 0 },
  { id: 16, team: 'CatchUp', name: '신혁', part: 'BE', votes: 0 },
  { id: 17, team: 'Modelly', name: '이연호', part: 'BE', votes: 0 },
  { id: 18, team: 'Modelly', name: '이준영', part: 'BE', votes: 0 },
  { id: 19, team: 'Menual', name: '이지원', part: 'BE', votes: 0 },
  { id: 20, team: 'Menual', name: '변하영', part: 'BE', votes: 0 },
];

// 전체 파트장 후보자들
export const partleaderCandidates: PartleaderCandidate[] = [
  ...feCandidates,
  ...beCandidates,
];
