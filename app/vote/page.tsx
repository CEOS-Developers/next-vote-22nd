
'use client';
import VoteMainHeader from "@/components/voteMainHeader";
import VoteBody from "@/components/voteBody";

export default function Vote() {
  return (

    <div className="relative w-full h-screen flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteMainHeader />
        <VoteBody />
      </section>
    </div>
  );
}
