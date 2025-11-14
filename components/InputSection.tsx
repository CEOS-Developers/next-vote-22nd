"use client";

type InputSectionProps = {
  placeholder?: string;
  type?: string;};

export default function InputSection({ placeholder,type}: InputSectionProps ){
  return (
     <div className="flex flex-col font-normal">
        <label className="text-sm">{placeholder}</label>
        <input type={type} placeholder={placeholder} className="border-b-3 border-brown px-4 py-2 w-80 mb-4 focus:outline-none font-bold text-lg"/>
      </div>
  );
}