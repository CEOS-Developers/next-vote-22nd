"use client";
import BlackButton from '@/components/BlackButton';
import Header from '@/components/Header';
import Input from '@/components/Input';

export default function SignUp() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <Header>Register</Header>
      <div className="flex flex-col font-normal">
        <label className="text-sm">Name</label>
        <Input type="text" placeholder="Name" />
      </div>
      <div className="flex flex-col font-normal">
        <label className="text-sm">ID</label>
        <Input type="text" placeholder="ID" />
      </div>
      <div className="flex flex-col font-normal">
        <label className="text-sm">Password</label>
        <Input type="password" placeholder="Password" />
      </div>
      <div className="flex flex-col font-normal">
        <label className="text-sm">Password Confirm</label>
        <Input type="password" placeholder="Password" />
      </div>
      <div className="flex flex-col font-normal">
        <label className="text-sm">Email</label>
        <Input type="text" placeholder="Email" />
      </div>
      <div className="flex flex-col font-normal">
        <label className="text-sm">Team/Part</label>
        <Input type="text" placeholder="Team" />
      </div>
      <BlackButton onClick={() => { window.location.href = '/login'; }}>
        Sign up
      </BlackButton>
    </div>
  );
}
