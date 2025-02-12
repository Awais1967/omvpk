// "use clientside"
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
         <div className="bg-[#052759]">
  
  <div className="flex justify-between items-center mx-4 sm:mx-12 lg:mx-32 ">
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
<div className="relative h-screen bg-[url('/background.jpg')] bg-cover bg-center">
  {/* Dark Overlay for Better Readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Centered Text Content */}
  <div className="relative flex justify-center items-center text-center h-full">
    <div className="text-white p-4 m-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
      <h3 className="text-5xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        Welcome to the <span className="text-blue-400">OMV Brand Portal</span>
      </h3>
      <p className="text-gray-200 text-2xl md:text-3xl mt-4 cursor-pointer  drop-shadow-md">
        Discover the idea behind our identity, guided by our Design Principles.
      </p>
    </div>
  </div>
</div>


         
          </>

  )
}

export default Navbar
