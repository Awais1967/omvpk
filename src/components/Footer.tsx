import React from 'react'
import Image from 'next/image'
const footer = () => {
  return (
    <>
  <div className='flex bg-[#052759] justify-center items-center p-6'>
  <div className="flex flex-wrap justify-between w-full max-w-screen-xl">
    {/* Logo and Description */}
    <div className='w-full sm:w-[25%] text-white p-4 flex flex-col items-center'>
      
        <Image src='/omv.png' alt='logo' width={250} height={200} />
      
      {/* <p className='mt-4 '>
        Your success is our success, and that’s why we measure your satisfaction every step of the way. We take pride in our work and believe every touchpoint is a chance to delight.
      </p> */}
    </div>

    {/* Services Section */}
    <div className='w-full sm:w-[25%] text-white p-4 '>
      <h3 className='text-lg font-semibold  mb-4'>Services</h3>
      <ul className='list-inside list-none'>
        <li>Exploration and Production</li>
        <li>Transportation and Storage</li>
        <li>Refining, Processing</li>
      </ul>
    </div>

    {/* Links Section */}
    <div className='w-full sm:w-[25%] text-white p-4'>
      <h3 className='text-lg font-semibold  mb-4'>Links</h3>
      <ul className='list-inside list-none'>
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>

    {/* Location Section */}
    <div className='w-full sm:w-[25%] text-white p-4'>
      <h3 className='text-lg font-semibold text-center mb-4'>Location</h3>
      <div className="flex justify-center">
        
      </div>
    </div>
  </div>
</div>
<div>

</div>
<hr className='w-1/2'/>
<div className="bg-[#052759] text-white ">
  <div className=' p-2 text-center'>
    <div>
    
    </div>
  
  <div className='flex justify-end items-end'>
  <p className='mr-96'>© Copyright <span>OMV</span> All rights reserved.</p>
  <p >Designed by Ambit Solutions</p>
  </div>
  
  </div>
</div>



      </>


    
  )
}

export default footer
