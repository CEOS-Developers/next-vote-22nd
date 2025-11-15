// src/components/box/MiddleBox.tsx
import React from "react";
import CheckIcon from "@/public/icons/check.svg";

interface MiddleBoxProps {
  label: string; // 박스 안에 들어갈 텍스트
  selected?: boolean; // 선택(hover/active) 상태인지
  onClick?: () => void; // 클릭했을 때 실행할 함수
}

const MiddleBox: React.FC<MiddleBoxProps> = ({
  label,
  selected = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group flex w-full h-30 items-center justify-between
        border-3 border-black bg-gray-100
        px-6 py-4 transition-colors
      "
    >
      {/* 왼쪽 텍스트 */}
      <span className="text-headline-02 px-3">{label}</span>

      {/* 오른쪽 동그라미 */}
      <div
        className="
          flex h-12 w-12 items-center justify-center
          rounded-full border border-gray-500 bg-white
          transition-colors
          group-hover:bg-pink-300
        "
      ></div>
    </button>
  );
};

export default MiddleBox;
