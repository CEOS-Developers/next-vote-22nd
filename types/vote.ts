// 서버에서 내려줄 후보
export type candidateResponse = {
  id: string;
  name: string;
  teamName: string;
  votes?: number;
};

// 투표 보낼 때
export type voteRequest = {
  position: 'voterFE' | 'voterBE';
  candidateId: string;
};

export type voteTeamRequest = {
  candidateId: string;
};

export type User = {
  id: string;
  name?: string;
  part?: 'BACKEND' | 'FRONTEND';
  team?: string;
};
