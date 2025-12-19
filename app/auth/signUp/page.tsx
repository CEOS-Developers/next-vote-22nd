'use client';
import BlackButton from '@/components/BlackButton';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { joinSchema } from '@/lib/auth';
import { authService } from '@/services/authService';
import { useAuth } from '@/auth/authStore';

export default function SignUp() {
  const router = useRouter();
  type Part = 'FRONTEND' | 'BACKEND';
  const [form, setForm] = useState<{
    name: string;
    id: string;
    password: string;
    confirmPassword: string;
    email: string;
    team: string;
    part: Part;
  }>({
    name: '',
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
    team: '',
    part: 'BACKEND',
  });
  const [errors, setErrors] = useState<{
    name?: string;
    id?: string;
    password?: string;
    confirmPassword?: string;
    email?: string;
    team?: string;
    part?: string;
  }>({});
  const join = useAuth((s) => s.login);
  const handleSignUp = async () => {
    const result = joinSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        id: fieldErrors.id?.[0],
        password: fieldErrors.password?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
        email: fieldErrors.email?.[0],
        name: fieldErrors.name?.[0],
        team: fieldErrors.team?.[0],
        part: fieldErrors.part?.[0],
      });
      return;
    }
    // 여기서 API 요청 보내기
    try {
      const payload = await authService.signup({
        loginId: form.id,
        password: form.password,
        email: form.email,
        part: form.part,
        name: form.name,
        team: form.team,
      });

      join(payload.accessToken, {
        id: payload.memberId,
        name: payload.name,
        part: payload.part,
        team: payload.team,
      });
      alert('회원가입 성공');
    } catch (error) {
      console.log(error);
    }
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
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-50"
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>
      <div className="flex flex-col mb-4">
        <div className="flex gap-4 pb-2">
          <select
            className="border-b-3 border-brown w-40 py-2 focus:outline-none text-lg"
            value={form.team}
            onChange={(e) => setForm({ ...form, team: e.target.value })}
          >
            <option value="">Team 선택</option>
            <option value="catchup">Team CatchUp</option>
            <option value="storix">Team STORIX</option>
            <option value="modelly">Team Modelly</option>
            <option value="menual">Team Menual</option>
            <option value="diggindie">Team DiggIndie</option>
          </select>
          <select
            className="border-b-3 border-brown w-40 py-2 focus:outline-none text-lg"
            value={form.part}
            onChange={(e) => setForm({ ...form, part: e.target.value as 'FRONTEND' | 'BACKEND' })}
          >
            <option value="BACKEND">백엔드</option>
            <option value="FRONTEND">프론트엔드</option>
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
