'use client';
import BlackButton from '@/components/BlackButton';
import Header from '@/components/Header';
import Input from '@/components/Input';

export default function Login() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-5">
      <Header>Login</Header>
      <div className="flex flex-col font-normal gap-4">
        <span className="text-sm">ID</span>
        <Input type="text" placeholder="ID" />
      </div>
      <div className="flex flex-col font-normal gap-4">
        <span className="text-sm">password</span>
        <Input type="password" placeholder="Password" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-normal">password</span>
        <Input type="password" placeholder="Password" />
      </div>
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
