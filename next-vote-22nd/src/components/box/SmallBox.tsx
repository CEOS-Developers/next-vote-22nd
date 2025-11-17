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
      className={`relative flex w-full flex-col items-center gap-1 border-2 border-black px-4 py-3 text-left transition-colors ${
        isSelect
          ? "bg-[var(--color-main-light)] shadow-[rgba(0,0,0,0.15)_6px_6px]"
          : "bg-white hover:bg-[var(--color-gray-50)]"
      }`}
    >
      <span className="text-xs font-semibold uppercase text-[var(--color-gray-600)]">
        {team}
      </span>
      <span className="text-base font-bold text-black">{name}</span>

      {isSelect && (
        <span className="absolute right-2 top-5  flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-white">
          <Image src="/icons/check.svg" alt="선택됨" width={20} height={20} />
        </span>
      )}
    </ComponentTag>
  );
};

export default SmallBox;
