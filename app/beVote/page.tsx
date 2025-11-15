
"use client";

import { useState } from "react";
import { PartCandidateList } from "@/components/partCandidateList";
import { mockPartCandidates } from "@/lib/mockCandidates";
import VoteHeader from "@/components/voteHeader";
import SubmitBtn from "@/components/submitBtn";

export default function BeVotePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="h-[315px] w-[169px] flex flex-col bg-[#FFD954] rounded-[19px]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={"BE 파트장 투표"} blackDot={2} backBtn={true}/>
        <PartCandidateList
          candidates={mockPartCandidates}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <SubmitBtn selectedId={selectedId} position="voterBE"/>
      </section>
    </main>
  );
}
