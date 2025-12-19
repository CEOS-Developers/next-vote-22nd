'use client';
import BlackButton from '@/components/BlackButton';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import { useState } from 'react';
import { loginSchema } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/authService';
import { useAuth } from '@/auth/authStore';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({
    id: '',
    password: '',
  });
  const [errors, setErrors] = useState<{
    id?: string;
    password?: string;
  }>({});
  const login = useAuth((s) => s.login);
  const handleLogin = async () => {
    setErrors({});
    const result = loginSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        id: fieldErrors.id?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }
    // 여기서 API 요청 보내기
    try {
      const res = await authService.login(form.id, form.password);

      login(res.accessToken, {
        id: String(res.memberId),
        name: res.name,
        part: res.part,
        team: res.team,
      });
      router.push('/auth/vote');
      alert('로그인 성공');
    } catch (error) {
      alert('로그인 실패');
      console.error('로그인 실패', error);
    }
  };
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-5">
      <Header>Login</Header>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // 페이지 리로드 방지
          handleLogin();
        }}
        className="flex flex-col items-center gap-5"
      >
        <div>
          <InputSection
            type="text"
            placeholder="ID"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />
          {errors.id && <p className="text-red-400 text-xs">{errors.id}</p>}
        </div>
        <div>
          <InputSection
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {errors.password && <p className="text-red-400 text-xs">{errors.password}</p>}
        </div>
        <BlackButton type="submit">login</BlackButton>
      </form>
    </div>
  );
}
