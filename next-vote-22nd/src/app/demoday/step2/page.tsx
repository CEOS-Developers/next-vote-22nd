// src/app/demoday/step2/page.tsx
'use client';

import Link from 'next/link';
import SmallBox from '@/components/box/SmallBox';
import { Suspense, useState } from 'react';
import { demodayCandidates, DemodayCandidate } from '@/data/demodayCandidates';

const steps = [1, 2, 3];
const currentStep = 2;

interface CandidateWithSelection extends DemodayCandidate {
  isSelect: boolean;
}

function DemoDayContent() {
  const [candidates, setCandidates] = useState<CandidateWithSelection[]>(
    demodayCandidates.map((c) => ({ ...c, isSelect: false }))
  );

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

    alert(`${selectedCandidate.team}에 투표했습니다!`);
    window.location.href = '/demoday/step3';
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
              href="/demoday/step1"
              aria-label="이전으로 이동"
              className="text-3xl text-black transition-colors hover:text-[var(--color-main)]"
            >
              ←
            </Link>
            <p className="text-headline-01">데모데이 투표</p>
          </div>

          <div className="h-[3px] w-full bg-black" />

          <div className="grid w-full grid-cols-1 gap-4">
            {candidates.map((candidate, index) => (
              <SmallBox
                key={candidate.team}
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

export default function DemoDayStep2Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DemoDayContent />
    </Suspense>
  );
}
