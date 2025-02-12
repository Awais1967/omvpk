import React from 'react'

const aboutusintro = () => {
  return (
    <div>
       <div className="relative h-[400px] bg-[url('/aboutus11.jpg')] bg-cover mt-20 bg-center ">
 
 <div className="absolute inset-0 bg-black/50"></div>


 <div className="relative flex justify-center items-center text-center h-full">
   <div className="text-white p-4 m-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
     <h3 className="text-5xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        <span className="text-blue-400">About Us</span>
     </h3>
     <p className="text-gray-200 text-2xl md:text-3xl mt-4 cursor-pointer  drop-shadow-md">
     
     We'd love to know that how we can serve you
     </p>
   </div>
 </div>
</div>
    </div>
  )
}

export default aboutusintro
