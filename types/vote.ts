// 서버에서 내려줄 후보
export type candidateResponse = {
  id: string;
  name: string;
  teamName: string; //
  votes?: number;    //결과보기 화면에서만 display
};

// 투표 보낼 때
export type voteRequest = {
  position: "voterFE | voterBE";
  candidateId: string;
};

export type voteTeamRequest = {
  candidateId: string;
};

