// 서버에서 내려줄 후보
export type candidateResponse = {
  id: string;
  name: string;
  teamName: string;
  votes?: number;
};
