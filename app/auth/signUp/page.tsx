'use client';
import BlackButton from '@/components/BlackButton';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { joinSchema } from '@/lib/auth';

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    id: '',
    password: '',
    confirmPassword: '',
    emailLocal: '',
    emailDomain: '',
    team: '',
    part: '',
  });
  const [errors, setErrors] = useState<{
    name?: string;
    id?: string;
    password?: string;
    confirmPassword?: string;
    emailLocal?: string;
    emailDomain?: string;
    team?: string;
    part?: string;
  }>({});

  const handleSignUp = () => {
    const result = joinSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        id: fieldErrors.id?.[0],
        password: fieldErrors.password?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
        emailLocal: fieldErrors.emailLocal?.[0],
        emailDomain: fieldErrors.emailDomain?.[0],
        name: fieldErrors.name?.[0],
        team: fieldErrors.team?.[0],
        part: fieldErrors.part?.[0],
      });
      return;
    }
    // 여기서 API 요청 보내기
    console.log('회원가입 성공', result.data);
    router.push('/');
  };
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <Header>Register</Header>
      <div>
        <InputSection
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>
      <div>
        <InputSection
          type="text"
          placeholder="ID"
          value={form.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
        />
        {errors.id && <p className="text-red-500 text-xs">{errors.id}</p>}
      </div>
      <div>
        <InputSection
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
      </div>
      <div>
        <InputSection
          type="password"
          placeholder="Password Check"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
      </div>
      <div>
        <div className="flex border-b-3 border-brown justify-center items-center w-80 gap-2 mb-1">
          <input
            type="text"
            placeholder="Email"
            value={form.emailLocal}
            onChange={(e) => setForm({ ...form, emailLocal: e.target.value })}
            className="w-50"
          />
          <select
            className="py-2 focus:outline-none text-lg mt-2"
            value={form.emailDomain}
            onChange={(e) => setForm({ ...form, emailDomain: e.target.value })}
          >
            <option>@naver.com</option>
            <option>@gmail.com</option>
          </select>
        </div>
        {errors.emailLocal && <p className="text-red-500 text-xs">{errors.emailLocal}</p>}
        {errors.emailDomain && <p className="text-red-500 text-xs">{errors.emailDomain}</p>}
      </div>
      <div className="flex flex-col mb-4">
        <div className="flex gap-4 pb-2">
          <select
            className="border-b-3 border-brown w-40 py-2 focus:outline-none text-lg"
            value={form.team}
            onChange={(e) => setForm({ ...form, team: e.target.value })}
          >
            <option value="">Team 선택</option>
            <option value="Team CatchUp">Team CatchUp</option>
            <option value="Team STORIX">Team STORIX</option>
            <option value="Team Modelly">Team Modelly</option>
            <option value="Team Menual">Team Menual</option>
            <option value="Team DiggIndie">Team DiggIndie</option>
          </select>
          <select
            className="border-b-3 border-brown w-40 py-2 focus:outline-none text-lg"
            value={form.part}
            onChange={(e) => setForm({ ...form, part: e.target.value })}
          >
            <option value="">Part 선택</option>
            <option value="기획">기획</option>
            <option value="백엔드">백엔드</option>
            <option value="프론트엔드">프론트엔드</option>
            <option value="디자인">디자인</option>
          </select>
        </div>
        <div className="px-2">
          {errors.team && <p className="text-red-500 text-xs">{errors.team}</p>}
          {errors.part && <p className="text-red-500 text-xs">{errors.part}</p>}
        </div>
      </div>
      <BlackButton onClick={handleSignUp}>Sign up</BlackButton>
    </div>
  );
}
