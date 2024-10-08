// "use server"
import React from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { auth, signIn, signOut } from '@/auh'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

async function Navbar() {
  const session = await auth();
  const user = session?.user;
  // console.log(user.name);
  console.log("session:  ", session);
  // const user=true;
  return (
    <nav className="bg-gray-800 p-4 md:w-[98.5vw] w-[94vw] flex justify-between">
      <h1 className="mr-4 text-white text-xl">
        Shrisant_Academy
      </h1>
      <ul className="md:list-none m-0 p-0 md:flex md:justify-around md:items-center  hidden">

        <li><Link href={"/"} className="text-white no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">Home</Link></li>
        <li><Link href="/about" className="text-white no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">About</Link></li>
        <li><Link href={"/blogs"} className="text-white no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">Blogs</Link></li>
        <li><Link href="/notes" className="text-white no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">notes</Link></li>
        {user ? (

          <li>
            <form action={
              async () => {
                "use server";
                await signOut()
              }
            }>
              <button type="submit" className='bg-purple-700 px-3 py-2 mx-2 rounded text-white no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4'>Signout</button>
            </form>
          </li>
        ) : (

          <div className='flex '>
            <li>
              <button className='bg-purple-700 px-3 py-2 mx-2 rounded'>
                <Link href="/login" className="text-white no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">Login</Link>
              </button>
            </li>
            <li>
              <button className='bg-purple-700 px-3 py-2 mx-2 rounded'>
                <Link href="/signup" className="text-white no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">Signup</Link>
              </button>
            </li>
          </div>
        )}
        <ModeToggle />
      </ul>

      <Sheet>
        <SheetTrigger className='md:hidden'><i className="fa-solid fa-bars bg-white px-2 py-2"></i></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Shrisant_Academy</SheetTitle>
            <SheetDescription>
              <ul className="md:list-none m-0 p-0 md:flex md:justify-around md:items-center">

                <li><Link href={"/"} className="text-black no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">Home</Link></li>
                <li><Link href="/about" className="text-black no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">About</Link></li>
                <li><Link href={"/blogs"} className="text-black no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">Blogs</Link></li>
                <li><Link href="/notes" className="text-black no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">notes</Link></li>
                {user ? (

                  <li>
                    <form action={
                      async () => {
                        "use server";
                        await signOut()
                      }
                    }>
                      <button type="submit" className='bg-purple-700 px-3 py-2 mx-2 rounded text-white no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4'>Signout</button>
                    </form>
                  </li>
                ) : (

                  <div className='flex '>
                    <li>
                      <button className='bg-purple-700 px-3 py-2 mx-2 rounded'>
                        <Link href="/login" className="text-white no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">Login</Link>
                      </button>
                    </li>
                    <li>
                      <button className='bg-purple-700 px-3 py-2 mx-2 rounded'>
                        <Link href="/signup" className="text-white no-underline p-2 hover:underline hover:text-[18px] hover:decoration-purple-700 hover:decoration-4">Signup</Link>
                      </button>
                    </li>
                  </div>
                )}
                <ModeToggle />
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className='md:hidden'>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar