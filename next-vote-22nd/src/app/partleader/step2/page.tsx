import { Suspense } from "react";
import PartLeaderStep2Client from "./step2Client";

export default function PartLeaderStep2Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--color-main-extra-light)]" />
      }
    >
      <PartLeaderStep2Client />
    </Suspense>
  );
}
