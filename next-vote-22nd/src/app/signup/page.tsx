// src/app/signup/page.tsx
'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSignup } from '@/features/auth/hooks/use-auth';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    team: '',
    part: '',
  });
  const [passwordError, setPasswordError] = useState('');

  // API Hook 사용
  const signupMutation = useSignup();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'password' || name === 'passwordConfirm') {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 비밀번호 확인 검증
    if (formData.password !== formData.passwordConfirm) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      return;
    }

    signupMutation.mutate(
      {
        loginId: formData.id,
        password: formData.password,
        email: formData.email,
        part: formData.part as 'FE' | 'BE',
        name: formData.name,
        team: formData.team as any,
      },
      {
        onSuccess: () => {
          alert('회원가입이 완료되었습니다!');
          router.push('/login');
        },
      }
    );
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
      <div
        className="relative rounded-[48px] bg-[var(--color-white)] shadow-[8px_8px_16px_var(--color-gray-400)] overflow-hidden"
        style={{ width: 393, height: 852 }}
      >
        <div className="relative w-full h-full px-8 py-10 overflow-y-auto">
          {/* Header with Back Button and Register */}
          <div className="flex items-center gap-4 mb-12">
            <Link href="/?skipSplash=true">
              <img
                src="/icons/main/back.svg"
                alt="Back"
                className="w-6 h-6 cursor-pointer"
              />
            </Link>
            <h1 className="text-[28px] font-bold text-[var(--color-black)]">
              Register
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* 에러 메시지 */}
            {(signupMutation.isError || passwordError) && (
              <div className="px-4 py-3 rounded bg-red-100 border border-red-400 text-red-700 text-sm">
                {passwordError ||
                  (signupMutation.error as any)?.response?.data?.message ||
                  '회원가입에 실패했습니다. 다시 시도해주세요.'}
              </div>
            )}

            <div>
              <label className="block text-[14px] text-[var(--color-black)] mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={signupMutation.isPending}
                className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none disabled:opacity-50"
                required
              />
            </div>

            <div>
              <label className="block text-[14px] text-[var(--color-black)] mb-1">
                ID
              </label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                disabled={signupMutation.isPending}
                className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none disabled:opacity-50"
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
                disabled={signupMutation.isPending}
                className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none disabled:opacity-50"
                required
              />
            </div>

            <div>
              <label className="block text-[14px] text-[var(--color-black)] mb-1">
                Password Confirm
              </label>
              <input
                type="password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                disabled={signupMutation.isPending}
                className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none disabled:opacity-50"
                required
              />
            </div>

            <div>
              <label className="block text-[14px] text-[var(--color-black)] mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={signupMutation.isPending}
                className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none disabled:opacity-50"
                required
              />
            </div>

            {/* Team / Part - 2개의 드롭다운 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-[14px] text-[var(--color-black)] mb-1">
                  Team
                </label>
                <select
                  name="team"
                  value={formData.team}
                  onChange={handleChange}
                  disabled={signupMutation.isPending}
                  className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none cursor-pointer disabled:opacity-50"
                  required
                >
                  <option value="">Select team</option>
                  <option value="DIGGINDIE">DiggIndie</option>
                  <option value="MODELLY">Modelly</option>
                  <option value="CATCHUP">CatchUP</option>
                  <option value="GROOMEASY">GroomEasy</option>
                  <option value="STORIX">STORIX</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-[14px] text-[var(--color-black)] mb-1">
                  Part
                </label>
                <select
                  name="part"
                  value={formData.part}
                  onChange={handleChange}
                  disabled={signupMutation.isPending}
                  className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none cursor-pointer disabled:opacity-50"
                  required
                >
                  <option value="">Select part</option>
                  <option value="FE">FE</option>
                  <option value="BE">BE</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={signupMutation.isPending}
              className="w-full h-[55px] mt-6 rounded-full bg-[var(--color-black)] hover:bg-[var(--color-main-light)] text-[var(--color-white)] hover:text-[var(--color-black)] text-[20px] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {signupMutation.isPending ? '가입 중...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
