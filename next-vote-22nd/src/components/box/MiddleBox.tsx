// src/components/box/MiddleBox.tsx
import React from "react";
import Link from "next/link";

interface MiddleBoxProps {
  label: string; // 박스 안에 들어갈 텍스트
}

const MiddleBox: React.FC<MiddleBoxProps> = ({ label }) => {
  return (
    <Link
      href={`/${label}/step1`}
      className="
        group flex w-full h-30 items-center justify-between
        border-3 border-black bg-gray-100
        px-6 py-4 hover:shadow-lg
      "
    >
      {/* 왼쪽 텍스트 */}
      <span className="text-headline-02 px-3">
        {label === "partleader"
          ? "파트장 투표"
          : label === "demoday"
          ? "데모데이 투표"
          : ""}
      </span>

      {/* 오른쪽 동그라미 */}
      <div
        className="
          flex h-12 w-12 items-center justify-center
          rounded-full border-2 border-black bg-white
          transition-colors
          group-hover:bg-main-light
        "
      ></div>
    </Link>
  );
};

export default MiddleBox;
