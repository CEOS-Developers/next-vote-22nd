// src/app/demoday/step3/page.tsx
"use client";

import Link from "next/link";
import ResultBox from "@/components/box/ResultBox";
import { useEffect, useState } from "react";
import { demodayCandidates, DemodayCandidate } from "@/data/demodayCandidates";
import { useQuery } from "@tanstack/react-query";
import { voteRepository } from "@/features/vote/api/vote.repository";

const steps = [1, 2, 3];
const currentStep = 3;

export default function DemoDayStep3Page() {
  const [candidates, setCandidates] = useState<DemodayCandidate[]>([]);

  // API에서 실제 득표 데이터 가져오기
  const { data: apiCandidates } = useQuery({
    queryKey: ["demoday-results"],
    queryFn: () => voteRepository.getDemoDayCandidates(),
    retry: 1,
  });

  useEffect(() => {
    let finalCandidates: DemodayCandidate[];

    if (apiCandidates && apiCandidates.length > 0) {
      // API 데이터가 있으면 사용
      console.log("✅ API 데이터 사용:", apiCandidates);
      finalCandidates = apiCandidates.map((c) => ({
        id: c.id,
        team: c.team,
        name: c.name,
        votes: c.votes,
      }));
    } else {
      // API 데이터가 없으면 로컬 데이터 사용
      console.log("⚠️ 로컬 데이터 사용 (API 데이터 없음)");
      finalCandidates = demodayCandidates;
    }

    // 득표순으로 정렬 (내림차순)
    const sorted = [...finalCandidates].sort((a, b) => b.votes - a.votes);
    setCandidates(sorted);
  }, [apiCandidates]);

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
          <div className="flex w-full items-center justify-center">
            <p className="text-headline-01">데모데이 결과</p>
          </div>

          <div className="h-[3px] w-full bg-black" />

          <div className="grid w-full grid-cols-1 gap-4">
            {candidates.map((candidate, index) => (
              <ResultBox
                key={candidate.team}
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
