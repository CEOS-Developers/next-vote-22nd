// components/demoCandidateList.tsx
'use client';

import type { candidateResponse } from '@/types/vote';
import DemoCandidateCard from '@/components/demoVote/DemoCandidateCard';

type Props = {
  candidates: candidateResponse[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export default function DemoCandidateList({ candidates, selectedId, onSelect }: Props) {
  return (
    <div className="w-full flex flex-col items-center gap-[25px] mt-[30px] px-[16px]">
      {candidates.map((candidate) => (
        <DemoCandidateCard
          key={candidate.id}
          candidate={candidate}
          selected={candidate.id === selectedId}
          onSelect={() => onSelect(candidate.id)}
        />
      ))}
    </div>
  );
}
