// src/components/box/ResultBox.tsx
import React from 'react';

interface ResultBoxProps {
  rank: number;
  name: string;
  team: string;
  votes: number;
}

export default function ResultBox({ rank, name, team, votes }: ResultBoxProps) {
  const isFirst = rank === 1;

  return (
    <div
      className={`relative flex w-full flex-col items-center gap-1 border-2 border-black px-4 py-3 transition-colors ${
        isFirst
          ? 'bg-[var(--color-main-light)] shadow-[rgba(0,0,0,0.15)_6px_6px]'
          : 'bg-white'
      }`}
    >
      {/* 팀명 - SmallBox와 동일 */}
      <span className="text-xs font-semibold uppercase text-[var(--color-gray-600)]">
        {team}
      </span>

      {/* 이름 - SmallBox와 동일 */}
      <span className="text-base font-bold text-black">{name}</span>

      {/* 1등 왕관 - 왼쪽 상단 */}
      {isFirst && <span className="absolute left-2 top-2 text-xl">👑</span>}

      {/* 득표수 - 오른쪽 상단 (체크 아이콘 위치와 동일) */}
      <span className="absolute right-2 top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-white">
        <span className="text-sm font-bold text-black">{votes}</span>
      </span>
    </div>
  );
}
