import React from 'react'

function Footer() {
  return (
    <div className='h-[40vh] bg-gray-900 flex flex-col items-center justify-center text-center p-4 relative top-28'>
  <div className='mb-4'>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='mx-2'>
      <img src="https://th.bing.com/th?id=OIP.zaiIl16zqTKDuhYIxeop0wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="Facebook" className='w-6 h-6 inline-block'/>
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='mx-2'>
      <img src="https://ts2.mm.bing.net/th?id=OIP.PXTov9TveYX3Upu592UOygHaHa&pid=15.1" alt="Twitter" className='w-6 h-6 inline-block'/>
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='mx-2'>
      <img src="https://th.bing.com/th/id/OIP.hQ2zPS6VNQFnizu6LSU1ngAAAA?w=184&h=184&c=7&r=0&o=5&pid=1.7" alt="Instagram" className='w-6 h-6 inline-block'/>
    </a>
  </div>
  <div className='mb-4 text-white'>
    <p>&copy; 2023 Your Company. All rights reserved.</p>
  </div>
  <div className='text-white'>
    <p>Contact us: contact@yourcompany.com | +1 (123) 456-7890</p>
  </div>
</div>
  )
}

export default Footer