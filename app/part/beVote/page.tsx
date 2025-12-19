'use client';

import { useState } from 'react';
import PartCandidateList from '@/components/partVote/PartCandidateList';
import { MockPartCandidates } from '@/lib';
import VoteHeader from '@/components/vote/VoteHeader';
import SubmitButton from '@/components/SubmitButton';
import RequireAuth from '@/components/RequireAuth';

export default function BeVotePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="relative w-full h-screen  w-[375px] flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={'BE 파트장 투표'} blackDot={2} backBtn={true} />
        <RequireAuth>
          <PartCandidateList candidates={MockPartCandidates} selectedId={selectedId} onSelect={setSelectedId} />
          <SubmitButton selectedId={selectedId} position="voterBE" />
        </RequireAuth>
      </section>
    </main>
  );
}
