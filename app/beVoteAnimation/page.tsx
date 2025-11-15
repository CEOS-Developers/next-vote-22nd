'use client';

import VoteHeader from "@/components/voteHeader"
import VoteAnimation from "@/components/voteAnimation";

export default function Vote() {
  return (
    <main className="h-[315px] w-[169px] flex flex-col bg-[#FFD954] rounded-[19px]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={"BE 파트장 투표"} blackDot={2} backBtn={false} />
        <VoteAnimation />
      </section>
    </main>
  );
}
