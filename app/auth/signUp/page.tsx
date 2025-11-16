"use client";
import BlackButton from '@/components/BlackButton';
import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import { useState } from 'react';

export default function SignUp() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [email, setEmail] = useState("");
    const [team, setTeam] = useState("Team CatchUp");
    const [part, setPart] = useState("기획");

    const handleSignUp = () => {
    // 1. 비어있는 항목 체크
    if (!name || !id || !password || !checkPassword || !email) {
      alert("모든 정보를 입력해주세요!");
      return;
    }

    // 2. 비밀번호 확인
    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    // 3. 더미 회원 데이터 구성
    const dummyUser = {
      name,
      id,
      password,
      email,
      team,
      part,
    };

    // 4. 더미 저장(옵션) -> 진짜 개발하면 API POST 요청 자리
    console.log("회원가입 완료(더미):", dummyUser);
    alert("회원가입 성공!");

    // 5. 로그인 페이지 혹은 홈으로 이동
    window.location.href = "/"; 
  };
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <Header>Register</Header>
        <InputSection type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <InputSection
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <InputSection
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputSection
        type="password"
        placeholder="Password Check"
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
      />
      <InputSection
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="font-normal flex flex-col w-80 mb-6">
        <label>Team / Part</label>
        <div className="flex flex-row gap-4">
          <select
            className="border-b-3 border-brown w-40 py-2 focus:outline-none text-lg"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          >
            <option>Team CatchUp</option>
            <option>Team STORIX</option>
            <option>Team Modelly</option>
            <option>Team Menual</option>
            <option>Team DiggIndie</option>
          </select>

          <select
            className="border-b-3 border-brown w-40 py-2 focus:outline-none text-lg"
            value={part}
            onChange={(e) => setPart(e.target.value)}
          >
            <option>기획</option>
            <option>백엔드</option>
            <option>프론트엔드</option>
            <option>디자인</option>
          </select>
        </div>
      </div>
      <BlackButton onClick={handleSignUp}>
        Sign up
      </BlackButton>
    </div>
  );
}
