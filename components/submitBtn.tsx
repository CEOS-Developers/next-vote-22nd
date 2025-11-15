'use client';

import { useRouter } from 'next/navigation';

type Props = {
  selectedId: string | null;
  position: 'voterFE' | 'voterBE' | 'member';
};

export default function SubmitBtn({ selectedId, position }: Props) {
  const router = useRouter();

  const handleClick = () => {
    try {
      if (!selectedId) {
        alert('후보를 선택해주세요.');
        return;
      }

      // 데이터 (임시)
      const data = {
        position,
        candidateId: selectedId,
        timestamp: Date.now(),
      };

      //localStorage에 저장
      localStorage.setItem('lastVote', JSON.stringify(data));

      //콜솔
      console.log('제출됨:', data);

      //파트에 따라 라우팅 경로 결정 후 라우팅
      const path = {
        voterFE: '/partVote/feVote/feVoteAnimation',
        voterBE: '/partVote/beVote/beVoteAnimation',
        member: '/demoVote/demoDayVote/demoVoteAnimation',
      } as const;
      router.push(path[position]);

      //간단한 에러메세지
    } catch (error) {
      console.error('제출 중 에러 발생:', error);
      alert('에러가 발생헀습니다.');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-[150px] h-[40px] rounded-full bg-[#D9D9D9] border-[2.1px] border-black text-[14px]
      text-black font-bold flex items-center justify-center hover:bg-yellow-300 mt-[40px]"
    >
      제출하기
    </button>
  );
}
