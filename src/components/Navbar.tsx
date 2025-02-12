// "use clientside"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
        <li><Link href="/home">Home</Link></li>
        <li>Services</li>
        <li><Link href="/About">About Us</Link></li>
        <li><Link href="/contactus">Contact Us</Link></li>
      </ul>
    </div>
  </div>
</div>




         
          </>

  )
}

export default Navbar
