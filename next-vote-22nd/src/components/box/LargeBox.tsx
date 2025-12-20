// src/components/box/LargeBox.tsx
'use client';

import React from 'react';
import Link from 'next/link';

interface LargeBoxProps {
  title: string;
  voteLink: string;
  resultLink: string;
}

export default function LargeBox({
  title,
  voteLink,
  resultLink,
}: LargeBoxProps) {
  return (
    <div className="flex h-32 w-full items-center justify-between rounded-2xl border-2 border-black bg-white px-6 transition-all hover:bg-gray-50">
      <Link href={voteLink} className="flex-1">
        <p className="text-headline-02">{title}</p>
      </Link>
      <Link
        href={resultLink}
        className="ml-4 rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        결과 보기
      </Link>
    </div>
  );
}
