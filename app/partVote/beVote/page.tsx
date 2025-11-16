'use client';

import { useState } from 'react';
import PartCandidateList from '@/components/partVote/PartCandidateList';
import { mockPartCandidates } from '@/lib/MockPartCandidates';
import VoteHeader from '@/components/vote/VoteHeader';
import SubmitBtn from '@/components/SubmitBtn';

export default function BeVotePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="relative w-full h-screen  w-[375px] flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={'BE 파트장 투표'} blackDot={2} backBtn={true} />
        <PartCandidateList candidates={mockPartCandidates} selectedId={selectedId} onSelect={setSelectedId} />
        <SubmitBtn selectedId={selectedId} position="voterBE" />
      </section>
    </main>
  );
}
