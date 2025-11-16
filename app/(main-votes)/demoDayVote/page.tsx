'use client';

import { useState } from 'react';
import DemoCandidateList from '@/components/demoVote/DemoCandidateList';
import { MockTeamCandidates } from '@/lib/MockTeamCandidates';
import VoteHeader from '@/components/vote/VoteHeader';
import SubmitButton from '@/components/SubmitButton';

export default function DemoDayVotePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="relative w-full h-screen  w-[375px] flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={'데모데이 투표'} blackDot={2} backBtn={true} />
        <DemoCandidateList candidates={MockTeamCandidates} selectedId={selectedId} onSelect={setSelectedId} />
        <SubmitButton selectedId={selectedId} position="member" />
      </section>
    </main>
  );
}
