'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import checkIcon from '@/public/icons/check.svg';

export default function PartVoteBody() {
  //각 버튼 하니씩
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <Link
        href={'partVote/feVote'}
        className={'flex mt-[32px] w-[300px] h-[165px] bg-white border-[4px] border-black justify-end items-center'}
      >
        <div className="flex flex-col font-bold text-[20px] text-black ml-[17px] mb-[10px] mr-auto ">
          <span className="">FRONT-END</span>
          <span className="">파트장 투표</span>
        </div>
        <div className={'flex flex-col items-center mr-[20px] mt-[28px]'}>
          <div
            className={`w-[40px] h-[40px] bg-gray-200 border-[2px] border-black rounded-full 
                     ${checked1 ? 'bg-yellow-300' : 'bg-gray-200 hover:bg-yellow-300'}`}
            onClick={() => setChecked1(!checked1)}
          >
            {checked1 && <Image src={checkIcon} alt="checked" width={30} height={30} className="ml-[2px] mt-[2px]" />}
          </div>
          <div
            className={`w-[62px] h-[26px] bg-gray-200 border-[1px] border-black rounded-full
                     ${checked3 ? 'bg-yellow-300' : 'bg-gray-200 hover:bg-yellow-300'} text-[12px] text-black font-black 
                     mt-[25px] mb-[12px] flex items-center justify-center`}
            onClick={() => setChecked3(!checked3)}
          >
            결과보기
          </div>
        </div>
      </Link>

      <Link
        href={'partVote/beVote'}
        className={'flex mt-[32px] w-[300px] h-[165px] bg-white border-[4px] border-black justify-end items-center'}
      >
        <div className="flex flex-col font-bold text-[20px] text-black ml-[17px] mb-[10px] mr-auto ">
          <span className="">BACK-END</span>
          <span className="">파트장 투표</span>
        </div>
        <div className={'flex flex-col items-center mr-[20px] mt-[28px]'}>
          <div
            className={`w-[40px] h-[40px] bg-gray-200 border-[2px] border-black rounded-full 
                     ${checked2 ? 'bg-yellow-300' : 'bg-gray-200 hover:bg-yellow-300'}`}
            onClick={() => setChecked2(!checked2)}
          >
            {checked2 && <Image src={checkIcon} alt="checked" width={30} height={30} className="ml-[2px] mt-[2px]" />}
          </div>
          <div
            className={`w-[62px] h-[26px] bg-gray-200 border-[1px] border-black rounded-full
                     ${checked4 ? 'bg-yellow-300' : 'bg-gray-200 hover:bg-yellow-300'} text-[12px] text-black font-black 
                     mt-[25px] mb-[12px] flex items-center justify-center`}
            onClick={() => setChecked4(!checked4)}
          >
            결과보기
          </div>
        </div>
      </Link>
    </div>
  );
}
