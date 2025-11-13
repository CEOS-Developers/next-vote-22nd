"use client";
import { useState } from "react";
import Image from "next/image";
import checkIcon from "../app/public/icons/check.svg";

export default function voteHeader() {
    //각 버튼 하니씩
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <div className=" w-full flex flex-col items-center">
            <div className={"flex mt-[32px] w-[149px] h-[78px] bg-white border-[2px] border-black justify-end items-center"}>
                <div className="w-[70px] h-[42px] flex flex-col font-bold text-[10px] text-black ml-[17px] mr-auto ">
                    <span className="h-[12px]">
                        데모데이 투표
                    </span>
                </div>
                <div className={"flex flex-col items-center mr-[10px]"}>
                    <div className={`w-[21px] h-[20px] bg-gray-200 border-[1px] border-black rounded-full
                     ${checked1 ? "bg-yellow-300" : "bg-gray-200 hover:bg-yellow-300"}`} onClick={() => setChecked1(!checked1)}>
                        {checked1 && (
                            <Image src={checkIcon} alt="checked" width={14} height={16} className="ml-[2px] mt-[2px]" />
                        )}
                    </div>
                    <div className={`w-[39px] h-[18px] bg-gray-200 border-[1px] border-black rounded-full
                     ${checked2 ? "bg-yellow-300" : "bg-gray-200 hover:bg-yellow-300"} text-[7px] text-black font-black mt-[11px]
                     flex items-center justify-center`} onClick={() => setChecked2(!checked2)}>
                        결과보기
                    </div>
                </div>
            </div>
        </div>
    );
}
