import { Suspense } from "react";
import DemoDayStep2Client from "./step2Client";

export default function DemoDayStep2Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--color-main-extra-light)]" />
      }
    >
      <DemoDayStep2Client />
    </Suspense>
  );
}
