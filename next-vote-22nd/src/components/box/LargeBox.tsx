// src/components/box/LargeBox.tsx
import Link from "next/link";

interface LargeBoxProps {
  title: string;
  buttonLabel: string;
}

const LargeBox = ({ title, buttonLabel }: LargeBoxProps) => {
  const label =
    title === "FE 파트장 투표" || title === "BE 파트장 투표"
      ? "partleader"
      : "demoday";

  return (
    <Link
      href={{ pathname: `/${label}/step2`, query: { title } }}
      className="group flex w-full flex-col gap-8 border-2 border-black bg-[var(--color-gray-50)] px-6 py-8 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span className="text-headline-02">{title}</span>
        <span className="h-12 w-12 rounded-full border-2 border-black transition-colors group-hover:bg-[var(--color-main-light)]" />
      </div>
      <div className="ml-auto rounded-full border-2 border-black px-6 py-2 text-button-02 transition-colors hover:bg-[var(--color-main)]">
        {buttonLabel}
      </div>
    </Link>
  );
};

export default LargeBox;
