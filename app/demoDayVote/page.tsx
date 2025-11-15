
"use client";

import { useState } from "react";
import { DemoCandidateList } from "@/components/demoCandidateList";
import { MockTeamCandidates } from "@/lib/mockTeamCandidates";
import VoteHeader from "@/components/voteHeader";
import SubmitBtn from "@/components/submitBtn";

export default function DemoDayVotePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="h-[315px] w-[169px] flex flex-col bg-[#FFD954] rounded-[19px]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={"데모데이 투표"} blackDot={2} backBtn={true}/>
        <DemoCandidateList
          candidates={MockTeamCandidates}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <SubmitBtn selectedId={selectedId} position="member"/>
      </section>
    </main>
  );
}
