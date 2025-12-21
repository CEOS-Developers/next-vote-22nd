import type { teamResponse } from '@/types/teamVote';

type Props = {
  candidate: teamResponse;
  selected: boolean;
  onSelect: () => void;
  showVotes?: boolean; //결과페이지에서 득표수 띄우기
};

export default function DemoCandidateCard({ candidate, selected, onSelect, showVotes = false }: Props) {
  const voteCount = candidate.votes ?? 0;

  return (
    <div
      onClick={onSelect}
      className={`relative w-[290px] h-[65px] border-[3px] flex flex-col items-center 
        ${selected ? 'bg-yellow-300 border-black' : 'bg-white border-black'}`}
    >
      {/* 결과 페이지에선 득표수 띄우기 */}
      {showVotes && (
        <div className="absolute -right-[10px] -bottom-[10px] w-[32px] h-[32px] rounded-full bg-white border-[3px] border-black flex items-center justify-center">
          <span className="text-[14px] font-black text-black leading-none">{voteCount}</span>
        </div>
      )}

      <div className="text-[12px] text-[#979797] leading-none font-bold mt-[7px]">{candidate.name}</div>
      <div className="z-10 text-[20px] leading-none mt-[4px] text-black font-semibold ">{candidate.name}</div>
      <div
        className={`absolute z-10 inset-0 bg-yellow-300/70 opacity-0
        ${!selected ? 'hover:opacity-100' : ''}`}
      >
        {' '}
        {/* 이미 선택된 건 오버레이x */}
      </div>
    </div>
  );
}
