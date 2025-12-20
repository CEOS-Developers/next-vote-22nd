'use client';

import { useEffect, useState } from 'react';

import DemoCandidateList from '@/components/demoVote/DemoCandidateList';
import VoteHeader from '@/components/vote/VoteHeader';
import SubmitButton from '@/components/SubmitButton';
import RequireAuth from '@/components/auth/RequireAuth';

import type { teamResponse } from '@/types/teamVote';
import { getTeams } from '@/lib/services/teamVote';
import { getAccessToken } from '@/lib/api/token';

export default function DemoDayVotePage() {
  const [candidates, setCandidates] = useState<teamResponse[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function run() {
      try {
        setLoading(true);
        setError(null);

        const token = getAccessToken();
        const list = await getTeams(token);

        setCandidates(list);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('Failed to load teams');
        }
      } finally {
        setLoading(false);
      }
    }

    run();
  }, []);

  return (
    <main className="relative w-full h-screen w-[375px] flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center">
        <VoteHeader title={'데모데이 투표'} blackDot={2} backBtn={true} />
        <RequireAuth>
           {loading && <div className="mt-6">loading...</div>}
        {error && <div className="mt-6">error: {error}</div>}

        {!loading && !error && (
          <DemoCandidateList
            candidates={candidates}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        )}

        <SubmitButton selectedId={selectedId} position="member" />
        </RequireAuth>

      </section>
    </main>
  );
}
