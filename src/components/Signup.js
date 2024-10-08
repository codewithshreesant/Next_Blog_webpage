'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';

function Signup({ children }) {
    const { push } = useRouter();
    let [signupDetails, setSignupDetails] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setSignupDetails({ ...signupDetails, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password } = signupDetails;

        const res = await axios.post('http://localhost:3000/api/signup', {
            username, email, password
        })
        if (res.status === 200) {
            console.log("Data sent successfully");
            push('/login');
        }
    }

    return (
        <div className='h-[80vh] flex md:flex-row flex-col justify-center items-center gap-8 mt-11'>
            <img src="https://media.istockphoto.com/id/613040822/photo/blank-yard-sign-with-copy-space-during-fall.jpg?b=1&s=612x612&w=0&k=20&c=0MuAccdnK-mSiDnO1yyjY53TW3fT7AL3GCWKqktkZ8g=" alt="not found" className='w-[30vw] h-[70vh]' />
            <div className='h-[80vh] flex flex-col gap-8 justify-center'>
                <h1 className='text-2xl text-center font-bold'>Create an Account</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center'>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="username">username:</label>
                        <input type="text" id='username' name='username' value={signupDetails.username} onChange={handleChange} className='border-2 border-solid border-black dark:border-white bg-white text-black' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="email">email:</label>
                        <input type="text" id='email' name='email' value={signupDetails.email} onChange={handleChange} className='border-2 border-solid border-black dark:border-white bg-white text-black' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="password">password:</label>
                        <input type="text" id='password' name='password' value={signupDetails.password} onChange={handleChange} className='border-2 border-solid border-black dark:border-white bg-white text-black' />
                    </div>
                    <div>
                        <button type='submit' className='bg-blue-300 px-5 py-2'>Signup</button>
                    </div>
                </form>
                {children}
            </div>

        </div>
    )
}

export default Signup