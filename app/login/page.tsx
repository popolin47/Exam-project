"use client";
import React, { useState } from 'react';
import { users } from '../data';

export default function Login() {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [studentIDError, setStudentIDError] = useState(false);

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.id.toString() === studentID && user.password === password
    );

    if (foundUser) {
      window.location.href = `/login/success/${studentID}`;
    } else if (!users.some((user) => user.id.toString() === studentID)) {
      setStudentIDError(true);
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
      <div className='flex flex-col h-screen justify-center items-center gap-3'>
        <h1 className="text-2xl font-semibold whitespace-nowrap dark:text-white">
          Login <br />
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <label className='pt-12'>Student ID</label>
          <input
            type='number'
            min={638700}
            max={668299}
            className='border-solid border-2 w-72 rounded-md'
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
          ></input>
          {studentIDError && (
            <p className="text-red-500">The student ID does not exist.</p>
          )}
        </div>
        <div className='flex flex-col justify-center items-center'>
          <label className='pt-12'>Password</label>
          <input
            type='password'
            className='border-solid border-2 w-72 rounded-md'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {loginError && (
            <p className="text-red-500">Invalid credentials. Please try again.</p>
          )}
        </div>
        <button onClick={handleLogin} className='bg-black text-white  px-4 py-2 rounded-md mt-4'>
          Login
        </button>
      </div>
    </div>
  );
}
