"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import checkIcon from "../app/public/icons/check.svg";

export default function VoteHeader() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (

        <div className=" w-full flex flex-col items-center font-bold">
            <Link href="/partVote" className="w-full flex justify-center">
            <div className={"flex mt-[50px] w-[250px] h-[71px] bg-white border-[4px] border-black justify-end items-center"}
                 onClick={() => setChecked1(!checked1)}>
                <span className="text-[16px] mr-[85px] text-black">
                    파트장 투표
                </span>
                <div className={`w-[31px] h-[30px] bg-gray-200 border-[1px] border-black rounded-full mr-[19px]
                     ${checked1 ? "bg-yellow-300" : "bg-gray-200 hover:bg-yellow-300"}`}>
                    {checked1 && (
                        <Image src={checkIcon} alt="checked" width={20} height={21} className="ml-[3px] mt-[2px]" />
                    )}
                </div>
            </div>
            </Link>

          <Link href="/demoVote" className="w-full flex justify-center">
            <div className={"flex mt-[50px] w-[250px] h-[71px] bg-white border-[4px] border-black justify-end items-center"}
                 onClick={() => setChecked2(!checked2)}>
                <span className="text-[16px] mr-[73px] text-black">
                    데모데이 투표
                </span>
              <div className={`w-[31px] h-[30px] bg-gray-200 border-[1px] border-black rounded-full mr-[19px]
                     ${checked1 ? "bg-yellow-300" : "bg-gray-200 hover:bg-yellow-300"}`}>
                {checked2 && (
                  <Image src={checkIcon} alt="checked" width={20} height={21} className="ml-[3px] mt-[2px]" />
                )}
              </div>
            </div>
          </Link>
        </div>
    );
}
