"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ResultBox from "@/components/box/ResultBox";
import LogoutModal from "@/components/common/LogoutModal";

const steps = [1, 2, 3];
const currentStep = 3;

const demodayCandidates = [
  { team: "STORIX", name: "STORIX" },
  { team: "DiggIndie", name: "DiggIndie" },
  { team: "CatchUp", name: "CatchUp" },
  { team: "Modelly", name: "Modelly" },
  { team: "GroomEasy", name: "GroomEasy" },
];

export default function DemoDayStep3Content() {
  const searchParams = useSearchParams();
  const pageTitle = searchParams.get("title") ?? "-";
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  return (
    <main
      className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        setIsLogoutOpen(true);
      }}
    >
      <LogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
      />
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
          <div className="flex w-full items-center gap-12">
            <Link
              href={{
                pathname: "/demoday/step2",
                query: { title: pageTitle },
              }}
              aria-label="이전 단계로 이동"
              className="text-3xl text-black transition-colors hover:text-[var(--color-main)]"
            >
              ←
            </Link>
            <p className="text-headline-01">{pageTitle}</p>
          </div>

          <div className="h-[3px] w-full bg-black" />
          <div className="grid w-full grid-cols gap-4">
            {demodayCandidates.map((candidate) => (
              <ResultBox
                key={`${candidate.team}-${candidate.name}`}
                name={candidate.name}
                team={candidate.team}
                votes={0}
              />
            ))}
          </div>
        </div>

        <Link
          href="/demoday/step1"
          className="mt-auto flex w-full items-center justify-center rounded-full border-2 border-black bg-[var(--color-main-light)] px-6 py-3 text-base font-semibold transition-colors hover:bg-[var(--color-main)]"
        >
          돌아가기
        </Link>
      </div>
    </main>
  );
}
