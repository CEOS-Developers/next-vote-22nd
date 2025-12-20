import Image from "next/image";

interface SmallBoxProps {
  name: string;
  team: string;
  isSelect?: boolean;
  onClick?: () => void;
  as?: "button" | "div";
}

const SmallBox = ({
  name,
  team,
  isSelect = false,
  onClick,
  as,
}: SmallBoxProps) => {
  const ComponentTag = (as ?? (onClick ? "button" : "div")) as "button" | "div";

  const componentProps =
    ComponentTag === "button"
      ? {
          type: "button" as const,
          onClick,
        }
      : {};

  return (
    <ComponentTag
      {...componentProps}
      className={`relative flex w-full flex-col items-center border-2 border-black px-2 pt-1 pb-2 text-left transition-colors ${
        isSelect
          ? "bg-[var(--color-main-light)] blur-1 shadow-[rgba(0,0,0,0.15)_6px_6px]"
          : "bg-white hover:bg-[var(--color-gray-50)]"
      }`}
    >
      <div
        className={`relative flex w-full flex-col items-center ${
          isSelect ? "opacity-40 transition-all" : ""
        }`}
      >
        <span className="text-xs font-semibold uppercase text-[var(--color-gray-600)]">
          {team}
        </span>
        <span className="text-body-02">{name}</span>
      </div>

      {isSelect && (
        <span className="absolute top-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white">
          <Image
            src="/icons/CheckIcon.svg"
            alt="선택됨"
            width={24}
            height={24}
          />
        </span>
      )}
    </ComponentTag>
  );
};

export default SmallBox;
