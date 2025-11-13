import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between pt-50 pb-30">
       {/* 이미지와 텍스트를 좌우로 배치 */}
      <div className="w-90 px-8 flex items-between flex-col overflow-hidden gap-4">
        <span className="text-black font-bold text-3xl text-shadow-lg text-right">
          CEOS <br /> Election
        </span>
        <Image src="/vote.svg" alt="logo" width={150} height={150}/>
      </div>
      <div className="flex flex-col gap-4">
<button className="bg-black text-white rounded-xl w-40 h-10 text-lg font-normal cursor-pointer shadow-lg hover:bg-yellow">join us</button>
<button className="text-black underline cursor-pointer">sign up as a member</button></div>
    </div>
  );
}
