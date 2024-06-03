import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='container mx-auto  overflow-hidden flex justify-between'>
        <div className="float-left px-5">
            <img src="/Images/yoyo.png" alt="logo" />
        </div>
        <div className='flex py-4 px-8 ml-auto'>
            <nav className=' space-x-8 '> 
               <Link href="/Home" className='text-black font-semibold'>Home</Link>
               <Link href="/About" className='font-bold '>About</Link>
               <Link href="/Contact" className='font-extrabold '>Contact</Link>
            </nav>
        </div>
    </div>
  )
}

export default Navbar