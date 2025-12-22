'use client';

type InputSectionProps = {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputSection({ placeholder, type, value, onChange }: InputSectionProps) {
  return (
    <div className="flex flex-col font-normal">
      <label className="text-xs">{placeholder}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border-b-3 border-brown px-4 py-2 w-80 mb-4 focus:outline-none font-bold text-sm"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
