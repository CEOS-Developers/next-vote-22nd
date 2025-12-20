// src/app/partleader/step3/page.tsx
import { Suspense } from 'react';
import Step3Client from './Step3Client';

export default function PartLeaderStep3Page() {
  return (
    <Suspense fallback={null}>
      <Step3Client />
    </Suspense>
  );
}
