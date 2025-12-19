'use client';

import { useEffect, useState } from 'react';

import DemoCandidateList from '@/components/demoVote/DemoCandidateList';
import type { teamResponse } from '@/types/teamVote';
import { getTeams } from '@/lib/services/teamVote';
import { getAccessToken } from '@/lib/api/token';

export default function DemoCandidateSelection () {
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

  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error}</div>;

  return (
    <DemoCandidateList
      candidates={candidates}
      selectedId={selectedId}
      onSelect={(id) => setSelectedId(id)}
    />
  );
}
