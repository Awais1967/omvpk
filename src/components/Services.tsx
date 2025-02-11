import React from 'react'
import Image from 'next/image'
import { FaCogs,FaAward,FaBalanceScale,FaStar  } from "react-icons/fa";
const Services = () => {
  return (
    <div className='p-12 m-12'>
      <div className='grid grid-flow-col grid-rows-8 gap-4 p-4 m-2 h-1/2'>
      <div className='row-span-8 h-40 p-4'>
        <Image src='/services.jpg' alt="services not found" width={400} height={500} className="rounded-lg shadow-lg border-black border-2"/>
      </div>
      <div className='row-span-4'>
      <FaCogs />

        <h1 className="text-xl font-semibold text-gray-800">Expert Solutions</h1>
      <p className="text-gray-600">Our team provides reliable solutions tailored to the oil and gas industry.</p></div>
      <div className='row-span-4'>
      <FaAward />

        <h1 className="text-xl font-semibold text-gray-800">Recognised For Excellence</h1>
      <p className="text-gray-600">We’ve been recognized for our operational excellence and customer satisfaction.</p></div> 
      <div className='row-span-4'>
      <FaBalanceScale />

        <h1 className="text-xl font-semibold text-gray-800">Compare The Best</h1>
      <p className="text-gray-600">We partner with leading oil and gas companies known for superior service.</p></div>
      <div className='row-span-4'>
      <FaStar />
        <h1 className="text-xl font-semibold text-gray-800">Premium Services</h1>
      <p className="text-gray-600">We deliver premium services to meet the industry's demanding needs.</p></div>

    </div>
    
    </div>
    
  )
}

export default Services
