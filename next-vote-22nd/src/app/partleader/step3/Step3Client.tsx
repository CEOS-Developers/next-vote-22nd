// src/app/partleader/step3/Step3Client.tsx
'use client';

import Link from 'next/link';
import ResultBox from '@/components/box/ResultBox';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  feCandidates,
  beCandidates,
  PartleaderCandidate,
} from '@/data/partleaderCandidates';
import { useQuery } from '@tanstack/react-query';
import { voteRepository } from '@/features/vote/api/vote.repository';

const steps = [1, 2, 3];
const currentStep = 3;

export default function Step3Client() {
  const searchParams = useSearchParams();
  const pageTitle = searchParams.get('title') ?? 'FE 파트장 투표 결과';

  const [candidates, setCandidates] = useState<PartleaderCandidate[]>([]);

  const { data: apiCandidates } = useQuery({
    queryKey: ['partleader-results'],
    queryFn: () => voteRepository.getPartLeaderCandidates(),
    retry: 1,
  });

  useEffect(() => {
    const isFE = pageTitle.includes('FE');
    const localCandidates = isFE ? feCandidates : beCandidates;

    let finalCandidates: PartleaderCandidate[];

    if (apiCandidates && apiCandidates.length > 0) {
      console.log('✅ API 데이터 사용:', apiCandidates);

      const converted: PartleaderCandidate[] = apiCandidates.map((c) => ({
        id: c.id,
        team: c.team,
        name: c.name,
        part: c.team.includes('프론트') || c.team.includes('FE') ? 'FE' : 'BE',
        votes: c.votes,
      }));

      const filtered = converted.filter((c) => c.part === (isFE ? 'FE' : 'BE'));
      finalCandidates = filtered;
    } else {
      console.log('⚠️ 로컬 데이터 사용 (API 데이터 없음)');
      finalCandidates = localCandidates;
    }

    const sorted = [...finalCandidates].sort((a, b) => b.votes - a.votes);
    setCandidates(sorted);
  }, [pageTitle, apiCandidates]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
      <div className="frame-iphone-16 relative flex w-full max-w-md flex-col items-center gap-8 px-8 py-10">
        <div className="flex items-center gap-24">
          {steps.map((step) => (
            <span
              key={step}
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-black text-label-01 ${
                step === currentStep
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }`}
            >
              {step}
            </span>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full items-center justify-center">
            <p className="text-headline-01">{pageTitle}</p>
          </div>

          <div className="h-[3px] w-full bg-black" />

          <div className="grid w-full grid-cols-2 gap-4">
            {candidates.map((candidate, index) => (
              <ResultBox
                key={`${candidate.team}-${candidate.name}`}
                rank={index + 1}
                name={candidate.name}
                team={candidate.team}
                votes={candidate.votes}
              />
            ))}
          </div>
        </div>

        <Link
          href="/electionSelect"
          className="mt-auto w-full rounded-full border-2 border-black bg-[var(--color-main-light)] px-6 py-3 text-base font-semibold transition-colors hover:bg-[var(--color-main)] text-center"
        >
          투표 홈으로
        </Link>
      </div>
    </main>
  );
}
