// src/components/StartButton.tsx
import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

const InitButton: React.FC<ButtonProps> = ({ label = "Start", onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex items-center justify-center
        w-[8rem] h-[1.5rem]
        rounded-full
        bg-black text-white
        text-[11px] font-medium
        shadow-[0_8px_16px_rgba(0,0,0,0.25)]
      "
    >
      {label}
    </button>
  );
};

export default InitButton;
