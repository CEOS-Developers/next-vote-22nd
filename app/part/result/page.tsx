import { Suspense } from 'react';
import LeaderResultsClient from './LeaderResultsClient';

export default function Page() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <LeaderResultsClient />
    </Suspense>
  );
}
