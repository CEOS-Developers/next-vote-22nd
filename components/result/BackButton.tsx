"use client";

import Link from "next/link";

export default function BackButton() {

  return (
    <Link
      href={'/select'}
      className="w-[150px] h-[40px] rounded-full bg-[#D9D9D9] border-[2.1px] border-black text-[14px]
      text-black font-bold flex items-center justify-center hover:bg-yellow-300 mt-[40px]"
    >
      돌아가기
    </Link>
  );
}
