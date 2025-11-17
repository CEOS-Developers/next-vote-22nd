"use client";

import Link from "next/link";
import SmallBox from "@/components/box/SmallBox";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const steps = [1, 2, 3];
const currentStep = 2;

interface Candidate {
  team: string;
  name: string;
  isSelect: boolean;
}

const initialCandidates: Candidate[] = [
  { team: "STORIX", name: "STORIX", isSelect: false },
  { team: "DiggIndie", name: "DiggIndie", isSelect: false },
  { team: "CatchUp", name: "CatchUp", isSelect: false },
  { team: "Modelly", name: "Modelly", isSelect: false },
  { team: "GroomEasy", name: "GroomEasy", isSelect: false },
];

export default function DemoDayStep2Page() {
  const searchParams = useSearchParams();
  const pageTitle = searchParams.get("title") ?? "-";
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);

  const handleSelect = (index: number) => {
    setCandidates((prev) =>
      prev.map((c, i) =>
        i === index ? { ...c, isSelect: true } : { ...c, isSelect: false }
      )
    );
  };

  const hasSelection = candidates.some((c) => c.isSelect);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
      <div className="frame-iphone-16 relative flex w-full max-w-md flex-col items-center gap-8 px-8 py-10">
        <div className="flex items-center gap-24">
          {steps.map((step) => (
            <span
              key={step}
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-black text-label-01 ${
                step === currentStep
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {step}
            </span>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-6">
          <Link
            href="/demoday/step1"
            aria-label="이전 단계로 이동"
            className="self-start text-3xl text-black transition-colors hover:text-[var(--color-main)]"
          >
            ←
          </Link>
          <p className="text-headline-01">{pageTitle} 결과</p>
          <div className="h-[3px] w-full bg-black" />

          <div className="grid w-full grid-cols gap-4">
            {candidates.map((candidate, index) => (
              <SmallBox {...candidate} onClick={() => handleSelect(index)} />
            ))}
          </div>
        </div>

        <button
          type="button"
          disabled={!hasSelection}
          className={`mt-auto w-full rounded-full border-2 border-black px-6 py-3 text-base font-semibold transition-colors ${
            hasSelection
              ? "bg-[var(--color-main-light)] hover:bg-[var(--color-main)]"
              : "cursor-not-allowed bg-[var(--color-gray-200)] text-[var(--color-gray-600)]"
          }`}
        >
          제출하기
        </button>
      </div>
    </main>
  );
}
