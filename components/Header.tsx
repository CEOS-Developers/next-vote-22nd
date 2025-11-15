"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children}: HeaderProps) {
    const router = useRouter();
    return (
           <div className="fixed top-0 h-20 w-[375px] font-bold text-4xl flex flex-row items-center justify-start gap-25 pl-4">
            <p onClick={() => router.back()}>
                <Image src="/arrow.svg" alt="goBack" width={30} height={30} className="cursor-pointer" loading="eager"/>
            </p>
            {children}</div>

  );
}