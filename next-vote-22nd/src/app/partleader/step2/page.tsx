// src/app/partleader/step2/page.tsx
import { Suspense } from "react";
import Step2Client from "./Step2Client";

export default function PartLeaderStep2Page() {
  return (
    <Suspense fallback={null}>
      <Step2Client />
    </Suspense>
  );
}
