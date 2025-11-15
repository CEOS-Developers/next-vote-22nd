// app/signup/page.tsx
'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    team: '',
    part: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-extra-light)] px-6 py-12">
      <div
        className="relative rounded-[48px] bg-[var(--color-white)] shadow-[8px_8px_16px_var(--color-gray-400)] overflow-hidden"
        style={{ width: 393, height: 852 }}
      >
        <div className="relative w-full h-full px-8 py-10">
          {/* Header with Back Button and Register */}
          <div className="flex items-center gap-4 mb-12">
            <Link href="/?skipSplash=true">
              {/* splash 페이지가 또 나오지 않도록  */}

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
            <div>
              <label className="block text-[14px] text-[var(--color-black)] mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none"
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

            <div>
              <label className="block text-[14px] text-[var(--color-black)] mb-1">
                Password Confirm
              </label>
              <input
                type="password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none"
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
                className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none"
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
                  className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none cursor-pointer"
                  required
                >
                  <option value="">Select team</option>
                  <option value="CatchUP">CatchUP</option>
                  <option value="STORIX">STORIX</option>
                  <option value="Modelly">Modelly</option>
                  <option value="Menual">Menual</option>
                  <option value="DiggIndie">DiggIndie</option>
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
                  className="w-full h-[45px] px-2 bg-transparent border-b border-[var(--color-gray-400)] text-[var(--color-black)] focus:border-[var(--color-main)] focus:outline-none cursor-pointer"
                  required
                >
                  <option value="">Select part</option>
                  <option value="FE">FE</option>
                  <option value="BE">BE</option>
                  <option value="PM">PM</option>
                  <option value="DE">DE</option>
                </select>
              </div>
            </div>

            <button className="w-full h-[55px] mt-6 rounded-full bg-[var(--color-black)] hover:bg-[var(--color-main-light)] text-[var(--color-white)] hover:text-[var(--color-black)] text-[20px] transition-colors cursor-pointer">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
