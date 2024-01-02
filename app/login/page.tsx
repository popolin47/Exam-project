import { Link, NumberInput, background } from '@chakra-ui/react';
import React, { useState } from 'react';
import { users } from '../data';

//login
export default function Login() {
  
    return  (
      <div>
        <div className='flex flex-col h-screen justify-center items-center gap-3'>
            <h1  className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Login <br/>
            </h1>
            <div className='flex flex-col justify-center items-center'>
              <label className='pt-12'>Student ID</label>
              <input type='number' min={638700} max={668299} 
                className='border-solid border-2 w-72 rounded-md'
                
              ></input>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <label className='pt-12'>Password</label>
              <input type='password' min={638700} max={668299} className='border-solid border-2 w-72 rounded-md'></input>
            </div>
        </div>
      </div>
    );
  }