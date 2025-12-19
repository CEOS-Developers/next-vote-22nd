'use client';
import VoteMainHeader from '@/components/vote/VoteMainHeader';
import VoteBody from '@/components/vote/VoteBody';
import RequireAuth from '@/components/RequireAuth';

export default function Select() {
  return (
    <div className="relative w-full h-screen flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteMainHeader />
        <RequireAuth>
          <VoteBody />
        </RequireAuth>
      </section>
    </div>
  );
}
