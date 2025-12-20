// src/app/partleader/step1/page.tsx
'use client';

import LargeBox from '@/components/box/LargeBox';
import Link from 'next/link';

const steps = [1, 2, 3];
const currentStep = 1;

export default function PartLeaderStep1Page() {
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
              href="/electionSelect"
              aria-label="이전으로 이동"
              className="text-3xl text-black transition-colors hover:text-[var(--color-main)]"
            >
              ←
            </Link>
            <p className="text-headline-01">파트장 투표</p>
          </div>

          <div className="h-[3px] w-full bg-black" />

          <div className="grid w-full grid-cols-1 gap-4">
            <LargeBox
              title="프론트엔드"
              voteLink="/partleader/step2?title=FE 파트장 투표"
              resultLink="/partleader/step3?title=FE 파트장 투표 결과"
            />
            <LargeBox
              title="백엔드"
              voteLink="/partleader/step2?title=BE 파트장 투표"
              resultLink="/partleader/step3?title=BE 파트장 투표 결과"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
