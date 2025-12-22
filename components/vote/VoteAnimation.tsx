// components/VoteSubmitAnimation.tsx
'use client';

import Image from 'next/image';
import ballot from '@/public/icons/ballot.svg';
import Box from '@/public/icons/box';
import Link from 'next/link';

type Props = {
  resultHref: string;
};

export default function VoteAnimation({ resultHref }: Props) {
  return (
    <>
      <div className="relative bg-[#FFD954] flex items-center justify-center">
        {/* 투표함 */}
        <div className="absolute left-1/2 -translate-x-1/2 mt-[400px]">
          <Box className="w-[120px] h-[160px]" />
        </div>

        {/* 투표용지 */}
        <div className="ballot-drop mt-[23px] mb-auto w-[50px] h-[60px]">
          <Image src={ballot} alt="ballot" width={200} height={300} />
        </div>
      </div>

      <Link
        href={resultHref}
        className="buttonChange w-[180px] h-[50px] rounded-full mb-[80px] bg-gray-300 border-black border-[2.3px] mt-auto"
      >
        <span className="flex justify-center mt-[10px] text-black text-[16px] font-bold">결과보기</span>
      </Link>

      <style jsx global>{`
        @keyframes ballotDrop {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          70% {
            transform: translateY(120px);
            opacity: 1;
          }
          100% {
            transform: translateY(120px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
