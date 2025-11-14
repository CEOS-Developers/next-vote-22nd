"use client";
import BlackButton from "@/components/BlackButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-5">
        <div className="fixed top-0 h-20 w-[375px] font-bold text-4xl flex flex-row items-center justify-start gap-25 pl-4"><p onClick={() => router.back()}><Image src="/arrow.svg" alt="goBack" width={30} height={30} className="cursor-pointer"/></p>Login</div>
        <div className="flex flex-col font-normal gap-4">
          <span className="text-sm">ID</span>
        <input type="text" placeholder="Username" className="border-b-3 border-brown px-4 py-2 w-80 mb-4 focus:outline-none font-bold text-lg"/>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm font-normal">password</span>
        <input type="password" placeholder="Password" className="border-b-3 border-brown px-4 py-2 w-80 mb-4 focus:outline-none font-bold text-lg"/>
        </div>
        <BlackButton onClick={() => {
          window.location.href = "/";
        }} >login</BlackButton>
    </div>
  );
}
