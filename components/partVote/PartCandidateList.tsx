'use client';

import type { candidateResponse } from '@/types/vote';
import PartCandidateCard from './PartCandidateCard';

type Props = {
  candidates: candidateResponse[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  showVotes?: boolean;
};

export default function PartCandidateList({ candidates, selectedId, onSelect, showVotes = false }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-[35px] gap-y-[20px] mt-[18px]">
      {candidates.map((candidate) => (
        <PartCandidateCard
          key={candidate.id}
          candidate={candidate}
          selected={candidate.id === selectedId}
          onSelect={() => onSelect(candidate.id)}
          showVotes={showVotes} //득표수
        />
      ))}
    </div>
  );
}
