"use client";

import { useEffect, useState } from "react";
import PartCandidateList from "@/components/partVote/PartCandidateList";
import VoteHeader from "@/components/vote/VoteHeader";
import SubmitButton from "@/components/SubmitButton";

import type { candidateResponse } from "@/types/vote";
import { getLeaderCandidates } from "@/lib/services/vote";
import { getAccessToken } from "@/lib/api/token";

export default function BeVotePage() {
  const [candidates, setCandidates] = useState<candidateResponse[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function run() {
      try {
        setLoading(true);
        setError(null);

        const token = getAccessToken();
        const list = await getLeaderCandidates("BACKEND", token);

        setCandidates(list);
      } catch (e: unknown) {
        if (e instanceof Error) setError(e.message);
        else setError("Failed to load candidates");
      } finally {
        setLoading(false);
      }
    }

    run();
  }, []);

  return (
    <main className="relative w-full h-screen w-[375px] flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={"BE 파트장 투표"} blackDot={2} backBtn={true} />

        {loading && <div className="mt-4">loading...</div>}
        {error && <div className="mt-4">error: {error}</div>}

        {!loading && !error && (
          <PartCandidateList
            candidates={candidates}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        )}

        <SubmitButton selectedId={selectedId} position="voterBE" />
      </section>
    </main>
  );
}
