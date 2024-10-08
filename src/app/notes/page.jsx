import React from 'react'

function Notes() {
    return (
        <div className='md:h-[100vh] grid md:grid-cols-3 grid-col-2 gap-12 items-center'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-2xl font-bold'>C programming</h1>
                <img src="https://th.bing.com/th/id/OIP.tmWtQr0CuaNw13CHQ4P6OAHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7" alt="not found" className='h-[30vh] w-[15vw]' />
                <button className='bg-blue-600 px-4 py-2 font-bold'>
                <a download href="c_programming.pdf">download</a>
                </button>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-2xl font-bold'>Java Programming</h1>
                <img src="https://th.bing.com/th/id/OIP.nSW4CicoWLTHXOL6sryb8AHaDr?w=290&h=173&c=7&r=0&o=5&pid=1.7" alt="not found" className='h-[30vh] w-[15vw]' />
                <button className='bg-blue-600 px-4 py-2 font-bold'>
                <a download href="java_programming.pdf">download</a>
                </button>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-2xl font-bold'>CSS</h1>
                <img src="https://th.bing.com/th?q=CSS+Log+PNG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=NP&setlang=en&adlt=moderate&t=1&mw=247" alt="not found" className='h-[30vh] w-[15vw]' />
                <button className='bg-blue-600 px-4 py-2 font-bold'>
                <a download href="css.pdf">download</a>
                </button>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-2xl font-bold'>Python Programming</h1>
                <img src="https://th.bing.com/th/id/OIP.t6p9haPdkLEkaokoY37MqQHaDy?w=304&h=178&c=7&r=0&o=5&pid=1.7" alt="not found" className='h-[30vh] w-[15vw]' />
                <button className='bg-blue-600 px-4 py-2 font-bold'>
                <a download href="python.pdf">download</a>
                </button>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-2xl font-bold'>Cplus Programming</h1>
                <img src="https://th.bing.com/th/id/OIP.k8fd1cyl6mj2xK6ssQF63QHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7" alt="not found" className='h-[30vh] w-[15vw]' />
                <button className='bg-blue-600 px-4 py-2 font-bold'>
                <a download href="cplus_programming.pdf">download</a>
                </button>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-2xl font-bold'>JavaScript Programming</h1>
                <img src="images/javascript.jfif" alt="not found" className='h-[30vh] w-[15vw]' />
                <button className='bg-blue-600 px-4 py-2 font-bold'>
                <a download href="javascript.pdf">download</a>
                </button>
            </div>
        </div>
    )
}


export default Notes