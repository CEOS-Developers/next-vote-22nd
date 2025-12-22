'use client';

import VoteHeader from '@/components/vote/VoteHeader';
import DemoVoteBody from '@/components/demoVote/DemoVoteBody';
import RequireAuth from '@/components/auth/RequireAuth';

export default function DemoVotePage() {
  return (
    <main className="relative w-full h-screen  w-[375px] flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={'데모데이 투표'} blackDot={1} backBtn={true} />
        <RequireAuth>
          <DemoVoteBody />
        </RequireAuth>
      </section>
    </main>
  );
}
