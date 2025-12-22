'use client';
import React from 'react';

type BlackButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function BlackButton({ children, type = 'button', onClick }: BlackButtonProps) {
  return (
    <button
      className="bg-black text-white rounded-xl w-42 h-10 text-md font-normal cursor-pointer shadow-lg hover:bg-yellow hover:text-black px-1"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
