// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
      {/* 아이폰 16 레이아웃 */}
      <div className="relative flex justify-center frame-iphone-16">
        <Link
          href="/electionSelect"
          className="mt-10 inline-flex h-11 w-full items-center justify-center rounded-full bg-black text-sm font-medium text-white shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
        >
          Start
        </Link>
      </div>
    </main>
  );
}
