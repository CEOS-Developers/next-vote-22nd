'use client';
import VoteMainHeader from '@/app/(main-votes)/vote/VoteMainHeader';
import VoteBody from '@/app/(main-votes)/vote/VoteBody';

export default function Select() {
  return (
    <div className="relative w-full h-screen flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteMainHeader />
        <VoteBody />
      </section>
    </div>
  );
}
