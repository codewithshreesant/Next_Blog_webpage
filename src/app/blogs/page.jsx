// 'use client'

import React from 'react'
import fs from 'fs'
import matter from 'gray-matter';
import Link from 'next/link';

const readDirs=fs.readdirSync('contents', 'utf-8');
const files=readDirs.map((file, index)=>{
const content=fs.readFileSync(`contents/${file}`, 'utf-8');
const {data}=matter(content);
console.log(data);
return data;
})


function Blog() {
  return (
    <div className='md:h-[120vh] grid md:grid-cols-3 w-[95vw] justify-center items-center mx-6 md:gap-4 gap-3 grid-cols-2 mt-4'>
       {
        files.map((element, index)=>{
            return <div className='md:w-[25vw]  md:h-[55vh] w-[40vw] rounded-lg dark:border-white bg-stone-100 dark:bg-gray-800' key={index}>
                <Link href={`/singleblog/${element.slug}`}>
                <div className='flex flex-col gap-4 items-center'>
                    <h2 className='text-2xl font-bold'>{element.title}</h2>
                    <img src={element.image} alt="not found" className='h-[20vh] w-[12vw]'/>
                    <p className='text-xl]'>{element.description}</p>
                    <button className='bg-purple-700 px-2 py-2 font-bold'>Learn now</button>
                    </div>
                </Link>
            </div>
        })
       }
    </div>
  )
}



export default Blog;