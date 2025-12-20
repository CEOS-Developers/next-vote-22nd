'use client';

import bar from '@/public/icons/bar.svg';
import Image from 'next/image';
import backIcon from '@/public/icons/back.svg';
import { useRouter } from 'next/navigation';

//헤더 윗부분 작은 동그라미 map함수 용
const dotsBetween = 5;

type partDemoVoteProps = {
  title: string;
  blackDot: number; //몇번째 동그라미가 검은색인지
  backBtn: boolean; //뒤로가기 버튼 유무
};

export default function ResultHeader({ title, blackDot, backBtn }: partDemoVoteProps) {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center font-bold">
      <div className="w-full flex items-center justify-center mt-[13px] gap-[11px]">
        <div
          className={`w-[30px] h-[30px] border-black rounded-full flex items-center justify-center 
                text-[11px] border-[2.5px] font-bold ${blackDot === 1 ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          1
        </div>
        {[...Array(dotsBetween)].map((_, i) => (
          <div key={i} className="w-[11px] h-[11px] bg-white rounded-full"></div>
        ))}

        <div
          className={`w-[30px] h-[30px] border-black rounded-full flex items-center justify-center 
                text-[11px] border-[2.5px] font-bold ${blackDot === 2 ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          2
        </div>
        {[...Array(dotsBetween)].map((_, i) => (
          <div key={i} className="w-[11px] h-[11px] bg-white rounded-full"></div>
        ))}

        <div
          className={`w-[30px] h-[30px] border-black rounded-full flex items-center justify-center 
                text-[11px] border-[2.5px] font-bold ${blackDot === 3 ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
          3
        </div>
      </div>

      <div className="flex w-full justify-center items-center mt-[30px]">
        {backBtn && (
          <div className="ml-[12px] mr-auto cursor-pointer" onClick={() => router.back()}>
            <Image src={backIcon} alt="back" width={40} height={40} />
          </div>
        )}
        <div className="absolute text-[23px] text-black font-bold">{title}</div>
      </div>
      <Image src={bar} alt="bar" className={'mt-[21px]'} width={325} />
    </div>
  );
}
