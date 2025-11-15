// src/app/electionSelect/page.tsx
import MiddleBox from "@/components/box/MiddleBox";

export default function SelectPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
      {/* 아이폰 프레임 */}
      <div className="frame-iphone-16 relative flex flex-col items-center justify-between px-8 py-16">
        {/* 텍스트 + 아이콘 영역 */}
        <div className="flex flex-col items-center w-full gap-6">
          <p className="text-headline-01 pt-[2rem]">파트장 / 데모데이 투표</p>
          <div className="mt-9 h-[4px] w-full bg-black" />
          <div className="flex flex-col w-full gap-25 pt-20">
            <MiddleBox label="파트장 투표" />
            <MiddleBox label="데모데이 투표" selected />
          </div>
        </div>
      </div>
    </main>
  );
}
