
//투표화면 첫페이지 헤더

import bar from "../app/public/icons/bar.svg"
import Image from "next/image";

export default function voteMainHeader() {
    return (
        <div className="w-full flex flex-col items-center font-bold">
            <span className={"font-bold text-3xl mb-[50px] mt-[50px] text-black"}>
                파트장 / 데모데이 투표
            </span>
            <Image src={bar} alt="bar" width={300} />
        </div>
    );
}
