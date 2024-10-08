'use client'

import React from 'react'
import Typed from 'typed.js';
import Link from 'next/link';


const HomePage = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<h1>Shrisant_Academy<h1>'],
      typeSpeed: 50,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>      
    <div className='flex flex-col gap-16'>
      <div className='flex md:flex-row flex-col justify-center items-center h-[80vh] md:gap-28'>
        <div>
          <img src="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="not found" className='md:h-[50vh] md:w-[40vw] h-[20vh] w-[50vw]' />
        </div>
        <div className='w-[45vw]'>
          <h1 className='flex md:flex-row flex-col gap-2 items-end text-3xl'>
          <span className='first-letter:text-5xl md:text-3xl text-2xl'>Welcome to</span>
          <span ref={el} />                    
          </h1>     
          <p>It is the platform for the people who want to learn programming from scratch.Here you can find the content about programming languages and other technical things</p>
          <button className='bg-blue-600 px-4 py-2 font-bold'><Link href={'/blogs'}>Learn now</Link></button>
        </div>
      </div>
      <div className='w-[90vw] flex md:flex-row flex-col justify-around items-center'>          
        <div>
          <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="not found" className='md:w-[25vw] md:h-[70vh] h-[40vh] w-[50vw]' />
        </div>
        <div className='w-[20vw] flex flex-col justify-center items-center'>
          <h1 className='text-2xl'>Programming</h1>
          <p className='text-justify text-xl w-[50vw]'>Programming is the process of designing and building an executable computer software to accomplish a specific computing task. It involves writing code in one or more programming languages to create a set of instructions that a computer can follow to perform specific operations. Here are some key aspects of programming:</p>
        </div>
      </div>
      <div className='w-[90vw] flex md:flex-row-reverse flex-col justify-around items-center'>
        <div>
          <img src="https://images.pexels.com/photos/326515/pexels-photo-326515.jpeg?auto=compress&cs=tinysrgb&w=600" alt="not found" className='md:w-[25vw] md:h-[70vh]  h-[40vh] w-[50vw]' />
        </div>
        <div className='w-[20vw] flex flex-col justify-center items-center'>
          <h1 className='text-2xl'>Web Development</h1>
          <p className='text-justify text-xl w-[50vw]'>Web development is the process of creating websites and web applications for the internet. It involves a combination of programming, design, and content creation. Key technologies include HTML , CSS , and JavaScript , which are used to structure, style, and add interactivity to web pages. 
            Backend development involves server-side languages like Python , Ruby , and PHP , along with databases such as MySQL  and MongoDB .
          </p>
        </div>
        
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className='text-center text-4xl font-bold'>Items</h1>
        <div className='flex flex-wrap gap-8 justify-around'>
        <img src="https://th.bing.com/th/id/OIP.97K8zwODMBDaPq09oQLvcwHaHa?w=201&h=200&c=7&r=0&o=5&pid=1.7" alt="not found" className='w-[150px] h-[122px] hover:h-[169px] hover:w-[180px] rounded-2xl cursor-pointer'/>
        <img src="https://ts3.mm.bing.net/th?id=OIP.Yk567-BTb3qeDgFqOGU6RwHaFj&pid=15.1" alt="not found" className='w-[150px] h-[122px] hover:h-[169px] hover:w-[180px] rounded-2xl cursor-pointer'/>
        <img src="https://th.bing.com/th?q=CSS+Logo+Transparent+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="not found"  className='w-[150px] h-[122px] hover:h-[169px] hover:w-[180px] rounded-2xl cursor-pointer'/>
        <img src="https://th.bing.com/th/id/OIP.5W93bojlueDZvd0c22CtigHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7" alt="not found" className='w-[150px] h-[122px] hover:h-[169px] hover:w-[180px] rounded-2xl cursor-pointer'/>
        <img src="https://th.bing.com/th/id/OIP.rrUx8smzGQP5_uhdcwEcMwHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7" alt="not found" className='w-[150px] h-[122px] hover:h-[169px] hover:w-[180px] rounded-2xl cursor-pointer'/>
        </div>
      </div>

      </div>
    </>
  );
};

export default HomePage;