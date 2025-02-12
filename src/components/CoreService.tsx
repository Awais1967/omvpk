import React from 'react'
import { FaMapMarkedAlt, FaShip, FaRecycle } from 'react-icons/fa';
import Image from 'next/image';
const CoreService = () => {
    return (
      <div className=" flex justify-center items-center p-6 mt-4">
  <div className="w-full max-w-6xl">
    <div className="text-center mb-8">
      <h3 className="text-3xl font-bold">Our Services</h3>
      <p className="text-3xl m-2 cursor-pointer">Are Saying About Us</p>
    </div>
    
    

   
    <div className="flex  flex-rows  gap-2 sm:gap-6 md:gap-8">
      <div className="flex p-6 mx-3 rounded-md bg-[#F7F5FA] text-xl font-semibold w-full sm:w-1/2 md:w-1/3">
        <FaMapMarkedAlt size={40} style={{ color: 'white', borderRadius: '50%', background: '#052759' }} />
        <h3 className="px-3 text-xl">Exploration and Production</h3>
      </div>
      <div className="flex p-6 mx-3 rounded-md bg-[#F7F5FA] text-xl font-semibold w-full sm:w-1/2 md:w-1/3">
        <FaShip size={40} style={{ color: 'white', borderRadius: '50%', background: '#052759' }} />
        <h3 className="px-3 text-xl">Transportation and Storage</h3>
      </div>
      <div className="flex p-6 mx-3 rounded-md bg-[#F7F5FA] text-xl font-semibold w-full sm:w-1/2 md:w-1/3">
        <FaRecycle size={40} style={{ color: 'white', borderRadius: '50%', background: '#052759' }} />
        <h3 className="px-3 text-xl">Refining, Processing, and Petrochemicals</h3>
      </div>
    </div>

    
    <div className="flex justify-center items-center p-2 m-2 text-xl">
      <div className="text-center">
        <h3 className="text-lg">Want to know more about this?</h3>
        <p className="text-[#052759] text-3xl m-2 cursor-pointer hover:underline">View All Services</p>
      </div>
    </div>

    
    <div className="flex justify-center w-full p-6 ">
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Side - Bold Text */}
    <p className="text-3xl font-bold leading-snug">
      We are trying to deliver 100% quality and managed services to achieve business ultimate goals
    </p>

    {/* Right Side - Description */}
    <p className="text-xl text-gray-600 leading-relaxed">
      We’re driven by a passion to help our clients, build stronger more agile and more innovative businesses.
      So your success is our success, and that’s why we measure your satisfaction on every step of the way.
      We take pride in our work and believe every touchpoint is a chance to delight.
    </p>
  </div>
</div>


    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6 md:px-8">
      <div className="flex justify-center">
        <Image src='/CoreServices/chemicalprocessingorrecyclingservices.jpg' alt='01' height={400} width={500} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center">
        <Image src='/CoreServices/drillingservices.jpg' alt='01' height={400} width={500} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center">
        <Image src='/CoreServices/gasstationsdispensingservices1.jpg' alt='02' height={400} width={500} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center">
        <Image src='/CoreServices/oiltankersservices.jpg' alt='02' height={400} width={500} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center">
        <Image src='/CoreServices/petrochemicalproduction.jpg' alt='01' height={400} width={500} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center">
        <Image src='/CoreServices/petroleumstorageprocessingservices.jpg' alt='01' height={400} width={500} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center">
        <Image src='/CoreServices/pipelinetransportation.jpg' alt='01' height={400} width={500} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center">
        <Image src='/CoreServices/productionfacilitiesservices.jpg' alt='01' height={400} width={500} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center">
        <Image src='/CoreServices/RefiningandProcessingandservices.jpeg' alt='01' height={400} width={500} className="rounded-lg shadow-lg" />
      </div>
    </div>
  </div>
</div>




    )
}

export default CoreService
