import React from 'react'
import { signIn } from '@/auh'
function Profile() {
  return (
    <div>
        <form action={
            async ()=>{
                "use server"
                await signIn("google")
            }
        }>
            <button type="submit">SignIn with Google</button>
        </form>
    </div>
  )
}

export default Profile