'use client';
import VoteMainHeader from '@/components/vote/VoteMainHeader';
import VoteBody from '@/components/vote/VoteBody';
import RequireAuth from '@/components/auth/RequireAuth';
import BlackButton from '@/components/BlackButton';
import { useRouter } from 'next/navigation';

export default function Select() {
  const router = useRouter();
  return (
    <div className="relative w-full h-screen flex flex-col bg-[#FFD954]">
      <section className="flex flex-1 flex-col items-center gap-5">
        <VoteMainHeader />
        <RequireAuth>
          <VoteBody />
        </RequireAuth>
        <BlackButton onClick={() => router.push('/')}>처음 화면으로 돌아가기</BlackButton>
      </section>
    </div>
  );
}
