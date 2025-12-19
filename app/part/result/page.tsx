"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import PartCandidateList from "@/components/partVote/PartCandidateList";
import VoteHeader from "@/components/vote/VoteHeader";
import BackButton from "@/components/result/BackButton";

import type { candidateResponse } from "@/types/vote";
import { getLeaderResults, sortByVotesDesc } from "@/lib/services/vote";
import { getAccessToken } from "@/lib/api/token";

type Part = "FRONTEND" | "BACKEND";

function isPart(x: string | null): x is Part {
  return x === "FRONTEND" || x === "BACKEND";
}

export default function LeaderResultsPage() {
  const searchParams = useSearchParams();

  const part: Part = useMemo(() => {
    const q = searchParams.get("part");
    return isPart(q) ? q : "FRONTEND";
  }, [searchParams]);

  const [candidates, setCandidates] = useState<candidateResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function run() {
      try {
        setLoading(true);
        setError(null);

        const token = getAccessToken();
        const list = await getLeaderResults(part, token);

        // 득표수 내림차순
        setCandidates(sortByVotesDesc(list));
      } catch (e: unknown) {
        if (e instanceof Error) setError(e.message);
        else setError("Failed to load results");
      } finally {
        setLoading(false);
      }
    }

    run();
  }, [part]);

  const title = part === "FRONTEND" ? "FE 파트장 투표 결과" : "BE 파트장 투표 결과";

  return (
    <main className="relative w-full h-screen w-[375px] flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={title} blackDot={3} backBtn={true} />

        {loading && <div className="mt-4">loading...</div>}
        {error && <div className="mt-4">error: {error}</div>}

        {!loading && !error && (
          <PartCandidateList
            candidates={candidates}
            selectedId={null}
            onSelect={() => {}}
          />
        )}
        <BackButton />
      </section>
    </main>
  );
}
