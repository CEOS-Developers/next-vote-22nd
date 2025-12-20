// src/components/common/LogoutModal.tsx
"use client";

import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  // 모달이 열릴 때 localStorage에서 id 읽기
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") ?? "" : "";

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return; // 카드/내부 클릭이면 무시
    onClose();
  };

  const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
    // 안쪽 카드 클릭 시 배경 onClick이 실행되지 않도록 막기
    e.stopPropagation();
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("userId");
    }
    onClose();
    router.push("/login"); // 로그인 화면으로 이동
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={handleBackdropClick}
    >
      {/* 핑크 박스 */}
      <div
        className="relative w-[280px] rounded-[16px] bg-[var(--color-main-light)] px-8 py-10 border-2 shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
        onClick={handleCardClick}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation(); // 카드 클릭(버블) 방지
            onClose();
          }}
          className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-[20px] leading-none text-[var(--color-black)] hover:bg-black/10"
        >
          ×
        </button>
        <p className="mb-8 text-center text-[18px] font-semibold text-[var(--color-black)]">
          {userId || "User"}
        </p>

        <button
          type="button"
          onClick={handleLogout}
          className="mx-auto flex h-[44px] w-[140px] items-center justify-center rounded-full border border-[var(--color-black)] bg-[var(--color-white)] text-[16px] font-medium hover:bg-[var(--color-gray-50)]"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
