
//투표화면 첫페이지 헤더

import bar from "../app/public/icons/bar.svg"
import Image from "next/image";

export default function voteMainHeader() {
    return (
        <div className="w-full flex flex-col items-center font-bold">
            <span className={"w-[123px] h-[16px] text-[13px] mb-[27px] mt-[33px] text-black"}>
                파트장 / 데모데이 투표
            </span>
            <Image src={bar} alt="bar"/>
        </div>
    );
}
