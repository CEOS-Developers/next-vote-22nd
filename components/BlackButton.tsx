"use client";
import React from "react";

type BlackButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function BlackButton({ children, onClick }: BlackButtonProps){
    return(
<button className="bg-black text-white rounded-xl w-42 h-10 text-lg font-normal cursor-pointer shadow-lg hover:bg-yellow hover:text-black" 
    onClick={onClick}>{children}</button>
    )
}