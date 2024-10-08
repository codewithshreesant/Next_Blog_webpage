// "use server"
import React from 'react'
import { signIn } from '@/auh'

function Google() {
    return (
        <div>
            <form action={
                async () => {
                    "use server";
                    await signIn("google")
                }
            }>
                <button type="submit" className='bg-slate-100 px-4 py-4 text-xl rounded-xl font-bold dark:bg-black flex gap-2'>
                    <img src="google.png" alt="not found" className='h-[5vh]'/>
                    <h1>signup with Google</h1></button>
            </form>
        </div>
    )
}

export default Google