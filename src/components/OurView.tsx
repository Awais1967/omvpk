import React from 'react'
import Image from 'next/image'
const OurView = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      <div className="relative h-auto md:h-[320px] bg-[url('/aboutus2.jpg')] bg-cover bg-center bg-no-repeat flex items-center px-6 md:px-10 py-10 md:py-0 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center w-full">
          {/* Left Text Section */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              We are trying to deliver{" "}
              <span className="font-extrabold text-yellow-300">100% quality</span>{" "}
              and managed services to achieve business ultimate goals
            </h3>
          </div>

          {/* Right Text Section */}
          <div className="md:w-1/2 w-full mt-6 md:mt-0">
            <p className="text-lg text-gray-100 leading-relaxed text-center md:text-left">
              We’re driven by a passion to help our clients build stronger, more
              agile, and more innovative businesses. Your success is our
              success, and that’s why we measure satisfaction at every step. We
              take pride in our work and believe every touchpoint is a chance to
              delight.
            </p>
          </div>
        </div>
      </div>

      {/* Image with Overlay Text Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-14 px-6 md:px-0 relative ">
        {/* Image Section */}
        <div className="relative md:absolute md:top-[-100px] w-full md:w-[600px] h-[300px] md:h-[400px]">
          <Image
            src="/overview.jpg"
            alt="Business Discussion"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Overlay Box */}

        <div className='mt-96'>
        <div className="md:absolute md:top-[100px] md:right-10  md:left-[1000px] md:transform md:-translate-y-1/2 bg-white text-gray-900 border border-gray-300 p-6 w-full md:w-[340px] shadow-xl rounded-lg mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-3">Do you know who we are?</h3>
          <p className="text-sm leading-relaxed">
            We help our clients in the petroleum and gas sector enhance
            operational efficiency by ensuring that critical energy processes
            run faster, more cost-effectively, and with greater reliability. Our
            expertise in designing and implementing advanced solutions enables
            businesses to modernize operations and drive sustainable growth.
          </p>
        </div>
        </div>
      </div>
    </div>



          </>

  )
}

export default OurView
