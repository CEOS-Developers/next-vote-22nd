'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import checkIcon from '@/public/icons/check.svg';

export default function VoteBody() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div className=" w-full flex flex-col items-center font-bold">
      <Link href="/part/start" className="w-full flex justify-center">
        <div
          className={'flex mt-[50px] w-[300px] h-[91px] bg-white border-[4px] border-black justify-end items-center'}
          onClick={() => setChecked1(!checked1)}
        >
          <span className="text-[20px] mr-[105px] text-black">파트장 투표</span>
          <div
            className={`w-[36px] h-[36px] bg-gray-200 border-[2px] border-black rounded-full mr-[19px]
                     ${checked1 ? 'bg-yellow-300' : 'bg-gray-200 hover:bg-yellow-300'}`}
          >
            {checked1 && <Image src={checkIcon} alt="checked" width={25} height={25} className="ml-[3px] mt-[2px]" />}
          </div>
        </div>
      </Link>

      <Link href="/demo/start" className="w-full flex justify-center">
        <div
          className={'flex mt-[50px] w-[300px] h-[91px] bg-white border-[4px] border-black justify-end items-center'}
          onClick={() => setChecked2(!checked2)}
        >
          <span className="text-[20px] mr-[93px] text-black">데모데이 투표</span>
          <div
            className={`w-[36px] h-[36px] bg-gray-200 border-[2px] border-black rounded-full mr-[19px]
                     ${checked2 ? 'bg-yellow-300' : 'bg-gray-200 hover:bg-yellow-300'}`}
          >
            {checked2 && <Image src={checkIcon} alt="checked" width={25} height={25} className="ml-[3px] mt-[2px]" />}
          </div>
        </div>
      </Link>
    </div>
  );
}
