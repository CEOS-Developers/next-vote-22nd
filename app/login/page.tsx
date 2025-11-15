'use client';
import BlackButton from '@/components/BlackButton';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import { useState } from 'react';

export default function Login() {

   const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 더미 사용자 데이터
  const dummyUser = {
    id: "test",
    password: "1234",
  };

  const handleLogin = () => {
    if (id === dummyUser.id && password === dummyUser.password) {
      alert("로그인 성공!");
      window.location.href = "/vote";
    } else {
      alert("ID 또는 비밀번호가 올바르지 않습니다.");
    }
  };
  //이 방식보다 form을 이용하는 방식이 더 나음
  //   const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
  //   if (e.key === 'Enter') {
  //     handleLogin();
  //   };
  // };
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
        <InputSection type="text" placeholder="ID"  value={id}
        onChange={(e) => setId(e.target.value)} />
        <InputSection type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <BlackButton
        type="submit"
      >
        login
      </BlackButton></form>
    </div>
  );
}
