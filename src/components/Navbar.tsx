// "use clientside"
import React from 'react'
import Image from 'next/image'
import logo from '@/assets/omv.png'

const Navbar = () => {
  return (
    <>
         <div className="bg-[#052759]">
  
  <div className="flex justify-between items-center mx-4 sm:mx-12 lg:mx-32 mt-12">
    <div className="logo ">
      <Image src='/omv.png' alt='logo' width={150} height={500} />
    </div>
    <div className="Navbar">
      <ul className="list flex space-x-4 uppercase p-4 text-lg text-[#EEFFFF]">
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
</div>

{/* Background Section */}
<div className="bg-[url('/background.jpg')] h-screen bg-cover bg-center opacity-100">
  <div className="flex justify-center items-center text-center text-xl">
    <div className="text-center p-2 m-2 mt-48 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
      <h3 className="text-5xl sm:text-4xl md:text-5xl font-bold">
        Welcome to the <span className='font-bold uppercase text-[#052759]'>OMV Brand Portal</span>
      </h3>
      <p className="text-[#052759] text-3xl m-2 cursor-pointer hover:underline">
        Discover the idea behind our identity, guided by our Design Principles.
      </p>
    </div>
  </div>
</div>

         
          </>

  )
}

export default Navbar
