'use client'

import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';

function Login() {
  const { push } = useRouter();
  let [loginDetails, setLoginDetails]=useState({
    email: "",
    password: ""
  })

  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setLoginDetails({...loginDetails, [name]: value});
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const {email, password}=loginDetails;
    const res=await axios.post('http://localhost:3000/api/login',{
      email, password
    })

    if(res.status === 200)
    {
      console.log("Login data sent successfully");
      push('/');
    }else{
      console.log("Error occured while data sent to login");
    }
  }

  return (
    <div className='md:h-[80vh] flex md:flex-row flex-col md:gap-20 gap-4 justify-center items-center mt-4'>
      <div>
        <img src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=600" alt="not found" className='md:w-[30vw] md:h-[70vh] w-[60vw]' />
      </div>
    <div className='h-[80vh] flex flex-col gap-8 justify-center items-center'>
      <h1 className='text-2xl text-center font-bold'>Welcome back</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center'>
        <div className='flex flex-col gap-4'>
          <label htmlFor="email">email</label>
          <input type="text" id='email' name='email' value={loginDetails.email} onChange={handleChange} className='border-2 border-solid border-black dark:border-white bg-white text-black'/>
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor="email">password</label>
          <input type="text" id='password' name='password' value={loginDetails.password} onChange={handleChange} className='border-2 border-solid border-black dark:border-white bg-white text-black'/>
        </div>
        <div>
          <button type='submit' className='bg-blue-300 px-5 py-2'>Login</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login;