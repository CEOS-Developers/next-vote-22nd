'use client';

import VoteHeader from '@/components/vote/VoteHeader';
import VoteAnimation from '@/components/vote/VoteAnimation';
import RequireAuth from '@/components/RequireAuth';

export default function DemoVoteAnimationPage() {
  return (
    <main className="relative w-full h-screen  w-[375px] flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={'데모데이 투표'} blackDot={2} backBtn={false} />
        <RequireAuth>
          <VoteAnimation />
        </RequireAuth>
      </section>
    </main>
  );
}
