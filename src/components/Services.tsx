import React from 'react'
import Image from 'next/image'
import { FaCogs,FaAward,FaBalanceScale,FaStar  } from "react-icons/fa";
const Services = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section - Image */}
        <div className="w-full h-full flex justify-center">
          <Image
            src="/services.jpg"
            alt="Services"
            width={400}
            height={500}
            className="rounded-lg shadow-lg border border-gray-300 object-cover"
          />
        </div>

        {/* Right Section - Features Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Feature Item 1 */}
          <div className="flex flex-col items-center text-center">
            <FaCogs className="text-4xl text-gray-600" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Expert Solutions
            </h3>
            <p className="text-gray-600">
              Our teams are expert in providing satisfactory solutions.
            </p>
          </div>

          {/* Feature Item 2 */}
          <div className="flex flex-col items-center text-center">
            <FaAward className="text-4xl text-gray-600" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Recognised For Excellence
            </h3>
            <p className="text-gray-600">
              We&apos;ve been awarded for our high rate of customer satisfaction.
            </p>
          </div>

          {/* Feature Item 3 */}
          <div className="flex flex-col items-center text-center">
            <FaBalanceScale className="text-4xl text-gray-600" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Compare The Best
            </h3>
            <p className="text-gray-600">
              We only compare market leaders with a reputation for service quality.
            </p>
          </div>

          {/* Feature Item 4 */}
          <div className="flex flex-col items-center text-center">
            <FaStar className="text-4xl text-gray-600" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Premium Services
            </h3>
            <p className="text-gray-600">
              We strive to provide premium quality services to our premium quality customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    
  )
}

export default Services
