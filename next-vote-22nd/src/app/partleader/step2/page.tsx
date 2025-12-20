// src/app/partleader/step2/page.tsx
'use client';

import Link from 'next/link';
import SmallBox from '@/components/box/SmallBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  feCandidates,
  beCandidates,
  PartleaderCandidate,
} from '@/data/partleaderCandidates';

const steps = [1, 2, 3];
const currentStep = 2;

interface CandidateWithSelection extends PartleaderCandidate {
  isSelect: boolean;
}

export default function PartLeaderStep2Page() {
  const searchParams = useSearchParams();
  const pageTitle = searchParams.get('title') ?? 'FE 파트장 투표';

  const [candidates, setCandidates] = useState<CandidateWithSelection[]>([]);

  useEffect(() => {
    const isFE = pageTitle.includes('FE');
    const candidateList = isFE ? feCandidates : beCandidates;

    setCandidates(candidateList.map((c) => ({ ...c, isSelect: false })));
  }, [pageTitle]);

  const handleSelect = (index: number) => {
    setCandidates((prev) =>
      prev.map((candidate, candidateIndex) =>
        candidateIndex === index
          ? { ...candidate, isSelect: true }
          : { ...candidate, isSelect: false }
      )
    );
  };

  const handleSubmit = () => {
    const selectedCandidate = candidates.find((c) => c.isSelect);
    if (!selectedCandidate) return;

    alert(`${selectedCandidate.name}님에게 투표했습니다!`);
    window.location.href = `/partleader/step3?title=${encodeURIComponent(
      pageTitle.replace('투표', '투표 결과')
    )}`;
  };

  const hasSelection = candidates.some((candidate) => candidate.isSelect);

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
          <div className="flex w-full items-center gap-12">
            <Link
              href="/partleader/step1"
              aria-label="이전으로 이동"
              className="text-3xl text-black transition-colors hover:text-[var(--color-main)]"
            >
              ←
            </Link>
            <p className="text-headline-01">{pageTitle}</p>
          </div>

          <div className="h-[3px] w-full bg-black" />

          <div className="grid w-full grid-cols-2 gap-4">
            {candidates.map((candidate, index) => (
              <SmallBox
                key={`${candidate.team}-${candidate.name}`}
                name={candidate.name}
                team={candidate.team}
                isSelect={candidate.isSelect}
                onClick={() => handleSelect(index)}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!hasSelection}
          className={`mt-auto w-full rounded-full border-2 border-black px-6 py-3 text-base font-semibold transition-colors ${
            hasSelection
              ? 'bg-[var(--color-main-light)] hover:bg-[var(--color-main)] cursor-pointer'
              : 'cursor-not-allowed bg-[var(--color-gray-200)] text-[var(--color-gray-600)]'
          }`}
        >
          제출하기
        </button>
      </div>
    </main>
  );
}
