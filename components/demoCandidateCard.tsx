
import type { candidateResponse } from "@/types/vote";

type Props = {
  candidate: candidateResponse;
  selected: boolean;
  onSelect: () => void;
};
export function DemoCandidateCard({ candidate, selected, onSelect }: Props) {
  return (
    <div onClick={onSelect}
         className={`relative w-[270px] h-[50px] border-[3px] flex flex-col items-center 
        ${selected ? 'bg-yellow-300 border-black' : 'bg-white border-black'}`}>
      <div className="text-[10px] text-[#979797] leading-none font-bold mt-[3px]">
        {candidate.teamName}
      </div>
      <div className="z-10 text-[18px] leading-none mt-[4px] text-black font-semibold ">
        {candidate.name}
      </div>
      <div className={`absolute z-10 inset-0 bg-yellow-300/70 opacity-0
        ${!selected ? 'hover:opacity-100' : ''}`}> {/* 이미 선택된 건 오버레이x */}
      </div>
    </div>
  );
}

