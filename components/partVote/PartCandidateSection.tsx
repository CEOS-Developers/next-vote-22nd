"use client";

import { useEffect, useState } from "react";
import PartCandidateList from "@/components/partVote/PartCandidateList";
import type { candidateResponse } from "@/types/vote";
import { getLeaderCandidates } from "@/lib/services/vote";
import { getAccessToken } from "@/lib/api/token";

export default function PartCandidateSection({
                                               part,
                                             }: {
  part: "FRONTEND" | "BACKEND";
}) {
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
        const list = await getLeaderCandidates(part, token);

        setCandidates(list);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Failed to load candidates");
        }
      } finally {
        setLoading(false);
      }
    }

    run();
  }, [part]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error}</div>;

  return (
    <PartCandidateList
      candidates={candidates}
      selectedId={selectedId}
      onSelect={(id) => setSelectedId(id)}
    />
  );
}
