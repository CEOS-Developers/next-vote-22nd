// app/page.tsx
'use client';

import { SplashWrapper } from './splash';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HomeContent() {
  const searchParams = useSearchParams();
  const skipSplash = searchParams.get('skipSplash') === 'true';

  const content = (
    <div className="relative w-full h-full">
      <img
        src="/icons/main/vote.svg"
        alt="Vote icon"
        className="absolute top-[360px] left-[56px] w-[119px] h-[138px]"
      />

      <div
        className="absolute top-[249px] left-[174px] w-[177px] h-[124px] flex items-center justify-center text-[51px] font-bold text-[var(--color-black)]"
        style={{ textShadow: '2px 3px 4px rgba(0, 0, 0, 0.25)' }}
      >
        <span className="text-center leading-none">
          CEOS
          <br />
          Election
        </span>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-[80px] flex flex-col items-center">
        <Link href="/login">
          <button className="group w-[295px] h-[65px] flex items-center justify-center rounded-full bg-[var(--color-black)] hover:bg-[var(--color-main-light)] transition-colors cursor-pointer">
            <span className="text-[24px] text-[var(--color-white)] group-hover:text-[var(--color-black)]">
              Join us
            </span>
          </button>
        </Link>

        <Link
          href="/signup"
          className="mt-[19px] text-[19px] text-[var(--color-black)] underline cursor-pointer"
        >
          Sign up as a member
        </Link>
      </div>
    </div>
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
      <div
        className="relative rounded-[48px] bg-[var(--color-white)] shadow-[8px_8px_16px_var(--color-gray-400)] overflow-hidden"
        style={{ width: 393, height: 852 }}
      >
        {skipSplash ? content : <SplashWrapper>{content}</SplashWrapper>}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
