import { Suspense } from "react";
import DemoDayStep3Content from "./step3Client";

export default function DemoDayStep3Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--color-main-extra-light)]" />
      }
    >
      <DemoDayStep3Content />
    </Suspense>
  );
}
