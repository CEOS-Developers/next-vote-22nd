'use client';

import type { candidateResponse } from '@/types/vote';
import { PartCandidateCard } from '@/components/partVote/PartCandidateCard';

type Props = {
  candidates: candidateResponse[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function PartCandidateList({ candidates, selectedId, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-[35px] gap-y-[20px] mt-[18px]">
      {candidates.map((candidate) => (
        <PartCandidateCard
          key={candidate.id}
          candidate={candidate}
          selected={candidate.id === selectedId}
          onSelect={() => onSelect(candidate.id)}
        />
      ))}
    </div>
  );
}
