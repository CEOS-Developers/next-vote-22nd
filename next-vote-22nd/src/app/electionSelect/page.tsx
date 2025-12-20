// src/app/electionSelect/page.tsx
'use client';

import MiddleBox from '@/components/box/MiddleBox';
import { useLogout } from '@/features/auth/hooks/use-auth';

export default function SelectPage() {
  const logoutMutation = useLogout();

  const handleLogout = () => {
    const refreshToken =
      typeof window !== 'undefined'
        ? sessionStorage.getItem('refreshToken')
        : null;

    if (!refreshToken) {
      // refreshToken 없으면 그냥 로컬 로그아웃 처리
      logoutMutation.mutate('');
      return;
    }

    logoutMutation.mutate(refreshToken);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
      {/* 아이폰 프레임 */}
      <div className="frame-iphone-16 relative flex flex-col items-center justify-between px-8 py-16">
        {/* 텍스트 + 아이콘 영역 */}
        <div className="flex flex-col items-center w-full gap-6">
          <p className="text-headline-01 pt-[2rem]">파트장 / 데모데이 투표</p>
          <div className="mt-9 h-[4px] w-full bg-black" />
          <div className="flex flex-col w-full gap-25 pt-20">
            <MiddleBox label="partleader" />
            <MiddleBox label="demoday" />
          </div>
        </div>

        {/*  로그아웃 버튼  */}
        <button
          type="button"
          onClick={handleLogout}
          disabled={logoutMutation.isPending}
          className="mt-12 w-full rounded-full border-2 border-black px-6 py-3 text-base font-semibold transition-colors
             hover:bg-[var(--color-main-light)] hover:text-black
             disabled:cursor-not-allowed disabled:opacity-50"
        >
          {logoutMutation.isPending ? '로그아웃 중...' : '로그아웃'}
        </button>
      </div>
    </main>
  );
}
