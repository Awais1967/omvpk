import React from 'react'
import Image from 'next/image'
import { FaCogs,FaAward,FaBalanceScale,FaStar  } from "react-icons/fa";
const Services = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 m-2">
      {/* Image Section */}
      <div className="col-span-1 sm:col-span-2 md:col-span-1 h-40">
        <Image 
          src='/services.jpg' 
          alt="services not found" 
          width={400} 
          height={500} 
          className="rounded-lg shadow-lg border-black border-2 w-full h-full object-cover"
        />
      </div>
  
      {/* Expert Solutions */}
      <div className="col-span-1 flex flex-col items-center justify-center p-4">
        <FaCogs className="text-3xl text-[#052759]" />
        <h1 className="text-xl font-semibold text-gray-800 mt-4">Expert Solutions</h1>
        <p className="text-gray-600 text-center">Our team provides reliable solutions tailored to the oil and gas industry.</p>
      </div>
  
      {/* Recognised For Excellence */}
      <div className="col-span-1 flex flex-col items-center justify-center p-4">
        <FaAward className="text-3xl text-[#052759]" />
        <h1 className="text-xl font-semibold text-gray-800 mt-4">Recognised For Excellence</h1>
        <p className="text-gray-600 text-center">{`We've been recognized for our operational excellence and customer satisfaction.`}</p>
      </div>
  
      {/* Compare The Best */}
      <div className="col-span-1 flex flex-col items-center justify-center p-4">
        <FaBalanceScale className="text-3xl text-[#052759]" />
        <h1 className="text-xl font-semibold text-gray-800 mt-4">Compare The Best</h1>
        <p className="text-gray-600 text-center">We partner with leading oil and gas companies known for superior service.</p>
      </div>
  
      {/* Premium Services */}
      <div className="col-span-1 flex flex-col items-center justify-center p-4">
        <FaStar className="text-3xl text-[#052759]" />
        <h1 className="text-xl font-semibold text-gray-800 mt-4">Premium Services</h1>
        <p className="text-gray-600 text-center">{`We deliver premium services to meet the industry's demanding needs.`}</p>
      </div>
    </div>
  </div>
  
    
  )
}

export default Services
