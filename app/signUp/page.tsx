"use client";
import BlackButton from '@/components/BlackButton';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';

export default function SignUp() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <Header>Register</Header>
        <InputSection type="text" placeholder="Name" />
        <InputSection type="text" placeholder="ID" />
        <InputSection type="password" placeholder="Password" />
        <InputSection type="password" placeholder="Password" />
        <InputSection type="text" placeholder="Email" />
      <div className="font-normal flex flex-col w-80">
        <label>Team/Part</label>
        <p className='flex flex-row gap-8'>
        <select className='border-b-3 border-brown w-30 mb-4 py-2 focus:outline-none text-lg'>
          <option>Team A</option>
          <option>Team B</option>
          <option>Team C</option>
          <option>Team D</option>
        </select>
        <select className='border-b-3 border-brown w-30 mb-4 py-2 focus:outline-none text-lg'>
          <option>Part A</option>
          <option>Part B</option>
          <option>Part C</option>
          <option>Part D</option>
        </select>
        </p>
      </div>
      <BlackButton onClick={() => { window.location.href = '/'; }}>
        Sign up
      </BlackButton>
    </div>
  );
}
