import bar from "@/app/public/icons/bar.svg";
import Image from "next/image";
import backIcon from "@/app/public/icons/back.svg";
import { useRouter } from "next/navigation";

//헤더 윗부분 작은 동그라미 map함수 용
const dotsBetween = 5;


type partDemoVoteProps = {
    title: string;      //파트장과 데모데이 투표를 각 page에서 title로 받아 표기, 나머지 요소 동일
    blackDot: number;   //몇번째 동그라미가 검은색인지
    backBtn: boolean;   //뒤로가기 버튼 유무
};

export default function voteHeader({ title, blackDot, backBtn }: partDemoVoteProps) {
    const router = useRouter();

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex items-center justify-center mt-[13px] gap-[5px]">
                <div className={`w-[13px] h-[13px] border-black rounded-full flex items-center justify-center 
                text-[6.7px] border-[1px] font-bold ${blackDot === 1 ? "bg-black text-white" : "bg-white text-black"}`}>
                    1
                </div>
                {[...Array(dotsBetween)].map((_, i) => (
                    <div key={i} className="w-[5px] h-[5px] bg-white rounded-full"></div>
                ))}

                <div className={`w-[13px] h-[13px] border-black rounded-full flex items-center justify-center 
                text-[6.7px] border-[1px] font-bold ${blackDot === 2 ? "bg-black text-white" : "bg-white text-black"}`}>
                    2
                </div>
                {[...Array(dotsBetween)].map((_, i) => (
                    <div key={i} className="w-[5px] h-[5px] bg-white rounded-full"></div>
                ))}

                <div className={`w-[13px] h-[13px] border-black rounded-full flex items-center justify-center 
                text-[6.7px] border-[1px] font-bold ${blackDot === 3 ? "bg-black text-white" : "bg-white text-black"}`}>
                    3
                </div>
            </div>

            <div className="flex w-full justify-center items-center mt-[18px] mb-[17px]">
                {backBtn && (
                    <div className="w-[20px] h-[20px] ml-[12px] mr-auto cursor-pointer"
                         onClick={() => router.back()}>
                        <Image src={backIcon} alt="back" />
                    </div>
                )}
                <div className="absolute text-[13px] text-black font-bold">
                    { title }
                </div>
            </div>
            <Image src={bar} alt="bar" />
        </div>
    );
}
