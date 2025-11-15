// components/VoteSubmitAnimation.tsx
"use client";

import Image from "next/image";
import ballot from "@/app/public/icons/ballot.svg";
import Box from "@/app/public/icons/box";


export default function VoteAnimation() {
  return (
    <>
      <div className="relative bg-[#FFD954] rounded-[19px] flex items-center justify-center">
        {/* 투표함 */}
        <div className="absolute left-1/2 -translate-x-1/2 mt-[180px]">
          <Box className="w-[60px] h-[80px]" />
        </div>

        {/* 투표용지 */}
        <div className="ballot-drop mt-[23px] mb-auto w-[22px] h-[24px]">
          <Image src={ballot} alt="ballot" width={200} height={300} />
        </div>
      </div>

      <div className="buttonChange w-[77px] h-[23px] rounded-full mb-[31px] bg-gray-300 border-black border-[0.8px] mt-auto">
        <span className="flex justify-center mt-[4px] text-black text-[9px] font-bold">
          결과보기
        </span>
      </div>

      {/* 애니메이션 정의 */}
      <style jsx global>{`
        @keyframes ballotDrop {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          70% {
            transform: translateY(60px);
            opacity: 1;
          }
          100% {
            transform: translateY(60px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}