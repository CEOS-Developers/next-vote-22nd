import { Suspense } from "react";
import PartLeaderStep3Client from "./step3Client";

export default function PartLeaderStep3Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--color-main-extra-light)]" />
      }
    >
      <PartLeaderStep3Client />
    </Suspense>
  );
}
