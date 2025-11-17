import LargeBox from "@/components/box/LargeBox";
import Link from "next/link";

const steps = [1, 2, 3];
const currentStep = 1;

export default function PartLeaderStep1Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
      <div className="frame-iphone-16 relative flex w-full max-w-md flex-col items-center gap-10 px-8 py-12">
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
          <div className="flex w-full items-center gap-15">
            <Link
              href={"/electionSelect"}
              className="self-start text-3xl text-black transition-colors hover:text-[var(--color-main)]"
              aria-label="이전 단계"
            >
              ←
            </Link>
            <p className="text-headline-01">파트장 투표</p>
          </div>
          <div className="h-[3px] w-full bg-black" />
          <LargeBox title="FE 파트장 투표" buttonLabel="결과 보기" />
          <LargeBox title="BE 파트장 투표" buttonLabel="결과 보기" />
        </div>
      </div>
    </main>
  );
}
