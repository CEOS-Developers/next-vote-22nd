'use client';

import { useEffect, useState } from 'react';

import DemoCandidateList from '@/components/demoVote/DemoCandidateList';
import VoteHeader from '@/components/vote/VoteHeader';
import BackButton from '@/components/result/BackButton';

import type { teamResponse } from '@/types/teamVote';
import { getTeamResults } from '@/lib/services/teamVote';
import { getAccessToken } from '@/lib/api/token';

export default function DemoDayResultPage() {
  const [candidates, setCandidates] = useState<teamResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function run() {
      try {
        setLoading(true);
        setError(null);

        const token = getAccessToken();
        const list = await getTeamResults(token);

        // 듣표수 내림차순 정렬
        const sorted = [...list].sort(
          (a, b) => (b.votes ?? 0) - (a.votes ?? 0)
        );

        setCandidates(sorted);
      } catch (e: unknown) {
        if (e instanceof Error) setError(e.message);
        else setError('Failed to load results');
      } finally {
        setLoading(false);
      }
    }

    run();
  }, []);

  return (
    <main className="relative w-full h-screen w-[375px] flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={'데모데이 투표 결과'} blackDot={3} backBtn={true} />

        {loading && <div className="mt-6">loading...</div>}
        {error && <div className="mt-6">error: {error}</div>}

        {!loading && !error && (
          <DemoCandidateList
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
