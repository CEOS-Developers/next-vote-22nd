// components/icons/BoxIcon.tsx

export default function BoxIcon({
                                  className = "",
                                }: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 61 82"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 전체 박스 라인 */}
      <path
        d="M0.5 14.5518L31.3288 0.551819L60.5 14.5518M0.5 14.5518L31.3288 29.0518L60.5 14.5518M0.5 14.5518V64.0518L31.3288 80.5518L60.5 64.0518V14.5518"
        stroke="black"
        fill="none"
      />

      {/* 아래 중심선 */}
      <path d="M31.5 28.5518V80.5518" stroke="black" fill="none" />

      {/* 윗면 투표함 구멍 */}
      <path
        d="M38.5 9.55182L21.5 18.5518L23.5 19.5518L40.5 10.5518L38.5 9.55182Z"
        stroke="black"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}
