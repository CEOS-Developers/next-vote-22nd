'use client';
import BlackButton from '@/components/BlackButton';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';

export default function Login() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-5">
      <Header>Login</Header>
        <InputSection type="text" placeholder="ID" />
        <InputSection type="password" placeholder="Password" />
        <InputSection type="password" placeholder="Password" />
      <BlackButton
        onClick={() => {
          window.location.href = '/';
        }}
      >
        login
      </BlackButton>
    </div>
  );
}
