import React from 'react'
import { FaMapMarkedAlt, FaShip, FaRecycle } from 'react-icons/fa';
import Image from 'next/image';
const CoreService = () => {
    return (
      <div className="bg-[#F4F7FC] flex justify-center items-center p-6">
  <div className="w-full max-w-6xl">
    <div className="text-center mb-8">
      <h3 className="text-3xl font-bold">Our Services</h3>
      <p className="text-3xl m-2 cursor-pointer">Are Saying About Us</p>
    </div>
    
    <div className="text-center mb-8 px-4">
      <p className="text-lg text-gray-700">
        We provide opportunities for growth and enrichment for the success of our business partners and the communities in which we operate. In everything we do, we strive for honesty, fairness, and integrity.
      </p>
    </div>

    {/* Service Cards */}
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
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

    {/* "Want to know more?" Section */}
    <div className="flex justify-center items-center p-2 m-2 text-xl">
      <div className="text-center">
        <h3 className="text-lg">Want to know more about this?</h3>
        <p className="text-[#052759] text-3xl m-2 cursor-pointer hover:underline">View All Services</p>
      </div>
    </div>

    {/* Text Content Section */}
    <div className="flex justify-center items-center w-full p-6">
      <div className="text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <p className="text-2xl font-bold mb-4">
          We are committed to delivering 100% quality and managed services to meet the ultimate goals of the petroleum industry.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          We’re driven by a passion to help our clients build stronger, more efficient, and more innovative energy solutions. Your success is our success, which is why we measure satisfaction at every step of the journey. We take immense pride in our work and believe every interaction is an opportunity to exceed expectations and add value.
        </p>
      </div>
    </div>

    {/* Image Grid */}
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
