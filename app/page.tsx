'use client';

import { useAuth } from '@/auth/authStore';
import BlackButton from '@/components/BlackButton';
import { authService } from '@/services/authService';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const isLogin = useAuth((s) => s.hydrated && !!s.accessToken);
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (e) {
      console.log('logout 실패', e);
    } finally {
      useAuth.getState().logout(); // Zustand 초기화
      router.push('/');
    }
  };
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between pt-50 pb-30">
      {/* 이미지와 텍스트를 좌우로 배치 */}
      <div className="w-90 px-8 flex items-between flex-col overflow-hidden gap-4">
        <span className="text-black font-bold text-3xl text-shadow-lg text-right">
          CEOS <br /> Election
        </span>
        <Image src="/icons/vote.svg" alt="logo" width={150} height={150} loading="eager" />
      </div>
      <div className="flex flex-col gap-4">
        {isLogin ? (
          <BlackButton onClick={handleLogout}>logout</BlackButton>
        ) : (
          <>
            <BlackButton
              onClick={() => {
                router.push('/auth/login');
              }}
            >
              로그인 하러가기
            </BlackButton>
            <button
              className="text-black underline cursor-pointer"
              onClick={() => {
                router.push('/auth/signUp');
              }}
            >
              회원가입하기
            </button>
          </>
        )}
      </div>
    </div>
  );
}
