"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import checkIcon from "../app/public/icons/check.svg";

export default function voteHeader() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (

        <div className=" w-full flex flex-col items-center font-bold">
            <Link href="/partVote" className="w-full flex justify-center">
            <div className={"flex mt-[36px] w-[149px] h-[48px] bg-white border-[2px] border-black justify-end items-center"}
                 onClick={() => setChecked1(!checked1)}>
                <span className="w-[49px] h-[12px] text-[10px] mr-[39px] text-black">
                    파트장 투표
                </span>
                <div className={`w-[21px] h-[20px] bg-gray-200 border-[1px] border-black rounded-full mr-[19px]
                     ${checked1 ? "bg-yellow-300" : "bg-gray-200 hover:bg-yellow-300"}`}>
                    {checked1 && (
                        <Image src={checkIcon} alt="checked" width={14} height={16} className="ml-[2px] mt-[2px]" />
                    )}
                </div>
            </div>
            </Link>

            <Link href="/demoVote" className="w-full flex justify-center">
            <div className={"flex mt-[41px] w-[149px] h-[48px] bg-white border-[2px] border-black justify-end items-center"}
                 onClick={() => setChecked2(!checked2)}>
                <span className=" h-[12px] text-[10px] ml-[21px] mr-auto text-black">
                    데모데이 투표
                </span>
                <div className={`w-[21px] h-[20px] bg-gray-200 border-[1px] border-black rounded-full mr-[19px]
                     ${checked2 ? "bg-yellow-300" : "bg-gray-200 hover:bg-yellow-300"}`}>
                    {checked2 && (
                        <Image src={checkIcon} alt="checked" width={14} height={16} className="ml-[2px] mt-[2px]" />
                    )}
                </div>
            </div>
            </Link>
        </div>
    );
}
