import React from 'react'

const Contactusform = () => {
  return (
    <div>
    <div className='text-center p-2 m-6 mr-36'>
      <h3 className='font-semibold mr-[370px] mb-2'>
      Leave a Message
      </h3>
      <h1 className='font-bold text-3xl mr-[190px] mb-2'>How We Can Help You</h1>
      <p className='mb-2'>
      Whether you have questions or would just like to say hello, contact us.
      </p>
    </div>
   <div>
   <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
  {/* Name & Email Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label htmlFor="username" className="block font-semibold text-gray-700">
        YOUR NAME <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Please Enter your Full Name"
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label htmlFor="email" className="block font-semibold text-gray-700">
        YOUR EMAIL ADDRESS <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Please Enter your Email"
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>

  {/* Subject & Phone Number Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div>
      <label htmlFor="Subject" className="block font-semibold text-gray-700">
        SUBJECT <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="Subject"
        id="Subject"
        placeholder="Managed Services"
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label htmlFor="phonenumber" className="block font-semibold text-gray-700">
        YOUR PHONE NUMBER <span className="text-red-500">*</span>
      </label>
      <input
        type="tel"
        name="phonenumber"
        id="phonenumber"
        placeholder="1234-32222141"
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>

  {/* Message Box */}
  <div className="mt-4">
    <label htmlFor="message" className="block font-semibold text-gray-700">
      HOW CAN WE HELP YOU? <span className="text-red-500">*</span>
    </label>
    <textarea
      name="message"
      id="message"
      placeholder="Hi there, I would like to ..."
      required
      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 h-28"
    ></textarea>
  </div>

  {/* Submit Button */}
  <div className="mt-6">
    <button
      type="submit"
      className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all"
    >
      SEND MESSAGE
    </button>
  </div>

  {/* Info Text */}
  <p className="text-gray-500 text-sm text-center mt-3">
    We'll get back to you in 1-2 business days.
  </p>
</form>

   </div>
    </div>
  )
}

export default Contactusform
