// src/components/common/LogoutModal.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, MouseEvent } from "react";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  // 모달이 열릴 때 localStorage에서 id 읽기
  useEffect(() => {
    if (!isOpen) return;
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("userId");
    if (stored) setUserId(stored);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = () => {
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
    router.push("/login"); // 가장 처음 화면으로 이동
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={handleBackdropClick}
    >
      {/* 핑크 박스 */}
      <div
        className="w-[280px] rounded-[24px] bg-[var(--color-main-light)] px-8 py-10 shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
        onClick={handleCardClick}
      >
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
