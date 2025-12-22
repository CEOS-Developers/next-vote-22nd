"use client";

import { useRouter } from "next/navigation";
import { getAccessToken } from "@/lib/api/token";
import { voteLeader } from "@/lib/services/vote";
import { voteTeam } from "@/lib/services/teamVote"; // ✅ 추가

type Props = {
  selectedId: string | null;
  position: "voterFE" | "voterBE" | "member";
};

export default function SubmitBtn({ selectedId, position }: Props) {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const token = getAccessToken();
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      const candidateId = Number(selectedId);
      if (!Number.isFinite(candidateId)) {
        alert("candidateId가 올바르지 않습니다.");
        return;
      }

      // ✅ 투표 API 분기
      if (position === "member") {
        // 데모데이 팀 투표
        await voteTeam(candidateId, token);
      } else {
        // 파트장 투표
        await voteLeader(candidateId, token);
      }

      const data = {
        position,
        candidateId,
      };

      localStorage.setItem("lastVote", JSON.stringify(data));
      console.log("제출됨:", data);

      const path = {
        voterFE: "/part/feVote/feVoteAnimation",
        voterBE: "/part/beVote/beVoteAnimation",
        member: "/demo/vote/demoVoteAnimation",
      } as const;

      router.push(path[position]);
    } catch (error) {
      console.error("제출 중 에러 발생:", error);
      alert("투표 요청 중 에러가 발생했습니다.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-[150px] h-[40px] rounded-full bg-[#D9D9D9] border-[2.1px] border-black text-[14px]
      text-black font-bold flex items-center justify-center hover:bg-yellow-300 mt-[40px]"
    >
      제출하기
    </button>
  );
}
