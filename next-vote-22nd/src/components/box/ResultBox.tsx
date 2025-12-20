import SmallBox from "./SmallBox";
import CrownIcon from "@/public/icons/Crown.svg";

interface ResultBoxProps {
  name: string;
  team: string;
  votes: number;
  isSelected?: boolean;
}

const ResultBox = ({ name, team, votes, isSelected }: ResultBoxProps) => {
  return (
    // 전체를 relative로
    <div className="relative w-full">
      {/* 왕관 */}
      {isSelected && (
        <span className="absolute -top-4 left-2 text-xl">
          <CrownIcon />
        </span>
      )}

      {/* 안쪽 상자 */}
      <SmallBox name={name} team={team} isSelect={isSelected} />

      {/* 오른쪽에 겹치는 동그라미 */}
      <div
        className="
          absolute -bottom-6 -right-5
          flex h-10 w-10 -translate-y-1/2
          items-center justify-center
          rounded-full border-2 border-black bg-white
          text-body-01
        "
      >
        {votes}
      </div>
    </div>
  );
};

export default ResultBox;
