"use client";

type InputProps = {
  placeholder?: string;
  type?: string;};

export default function Input({ placeholder,type}: InputProps ){
  return (
        <input type={type} placeholder={placeholder} className="border-b-3 border-brown px-4 py-2 w-80 mb-4 focus:outline-none font-bold text-lg"/>
  );
}