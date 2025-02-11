import Image from 'next/image'
import React from 'react'

const Feedback = () => {
  return (
    <div className="bg-[#F4F7FC] flex justify-center items-center p-8">
  <div className="w-full max-w-6xl">
    <div className="text-center mb-8">
      <h3 className="text-3xl font-bold">What Our Customers</h3>
      <p className="text-3xl m-2 cursor-pointer ">Are Saying About Us</p>
    </div>
    
    <div className="text-center mb-8 px-4">
      <p className="text-lg text-gray-700">
        We provide opportunities for growth and enrichment for the success of our business partners and the communities in which we operate. In everything we do, we strive for honesty, fairness, and integrity.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex items-center justify-center mb-4">
          <Image src='/users/userimage.png' alt='user1' height={100} width={100} className='rounded-full' />
        </div>
        <p className="font-semibold text-lg text-center">Amir Junaid</p>
        <p className="text-gray-500 text-center">Chief Technical Officer</p>
        <p className="mt-4 text-gray-600 text-center">
          We’re pleased to choose SigTech Solutions for the managed solutions. The team is highly skilled, cooperative, and much responsive. We are looking forward to having a long-term relationship with them.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex items-center justify-center mb-4">
          <Image src='/users/femaleuser.png' alt='user2' height={100} width={100} className='rounded-full' />
        </div>
        <p className="font-semibold text-lg text-center">Fatima Noor</p>
        <p className="text-gray-500 text-center">Project Coordinator</p>
        <p className="mt-4 text-gray-600 text-center">
          We just sincerely appreciate the expert services provided by the company. Thank you.
        </p>
      </div>
    </div>
  </div>
</div>


  )
}

export default Feedback
