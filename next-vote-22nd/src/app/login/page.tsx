// app/login/page.tsx
'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [showWelcome, setShowWelcome] = useState(false);
  const [userName, setUserName] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setUserName(formData.id);
    setShowWelcome(true);
  };

  const handleStart = () => {
    router.push('/?skipSplash=true');
  };

  // Welcome 화면
  if (showWelcome) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
        <div
          className="relative rounded-[48px] bg-[var(--color-white)] shadow-[8px_8px_16px_var(--color-gray-400)] overflow-hidden"
          style={{ width: 393, height: 852 }}
        >
          <div className="relative w-full h-full">
            {/* Vote Icon */}
            <img
              src="/icons/main/vote.svg"
              alt="Vote icon"
              className="absolute top-[360px] right-[40px] w-[140px] h-[140px]"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(65%) sepia(0%) saturate(0%) hue-rotate(202deg) brightness(96%) contrast(92%)',
              }}
            />

            {/* Welcome + Name - 왼쪽 정렬 */}
            <div
              className="absolute top-[249px] left-[56px] flex items-center justify-start text-[51px] font-bold text-[var(--color-black)]"
              style={{ textShadow: '2px 3px 4px rgba(0, 0, 0, 0.25)' }}
            >
              <span className="text-left leading-none">
                Welcome
                <br />
                {userName}
              </span>
            </div>

            {/* Start Button */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[80px]">
              <button
                onClick={handleStart}
                className="group w-[295px] h-[65px] flex items-center justify-center rounded-full bg-[var(--color-black)] hover:bg-[var(--color-main-light)] transition-colors cursor-pointer"
              >
                <span className="text-[24px] text-[var(--color-white)] group-hover:text-[var(--color-black)]">
                  Start
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Login 화면
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
      <div
        className="relative rounded-[48px] bg-[var(--color-white)] shadow-[8px_8px_16px_var(--color-gray-400)] overflow-hidden"
        style={{ width: 393, height: 852 }}
      >
        <div className="relative w-full h-full px-8 py-10">
          <div className="flex items-center gap-4 mb-12">
            <Link href="/?skipSplash=true">
              <img
                src="/icons/main/back.svg"
                alt="Back"
                className="w-6 h-6 cursor-pointer"
              />
            </Link>
            <h1 className="text-[28px] font-bold text-[var(--color-black)]">
              Login
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-[14px] text-[var(--color-black)] mb-1">
                ID
              </label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-[14px] text-[var(--color-black)] mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none"
                required
              />
            </div>

            <button className="w-full h-[55px] mt-6 rounded-full bg-[var(--color-black)] hover:bg-[var(--color-main-light)] text-[var(--color-white)] hover:text-[var(--color-black)] text-[20px] transition-colors cursor-pointer">
              Login
            </button>

            <Link
              href="/signup"
              className="text-center text-[16px] text-[var(--color-gray-600)] hover:text-[var(--color-black)] underline cursor-pointer"
            >
              Don't have an account? Sign up
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}
