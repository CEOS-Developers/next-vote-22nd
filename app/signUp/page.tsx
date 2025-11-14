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
      <BlackButton onClick={() => { window.location.href = '/login'; }}>
        Sign up
      </BlackButton>
    </div>
  );
}
