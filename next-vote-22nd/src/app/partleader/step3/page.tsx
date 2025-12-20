import { Suspense } from "react";
import PartLeaderStep3Client from "./step3Client";
// src/app/partleader/step3/page.tsx
import { Suspense } from 'react';
import Step3Client from './Step3Client';

export default function PartLeaderStep3Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--color-main-extra-light)]" />
      }
    >
      <PartLeaderStep3Client />
    </Suspense>
    <Suspense fallback={null}>
      <Step3Client />
    </Suspense>
  );
}
