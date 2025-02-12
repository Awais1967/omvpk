import React from 'react'
import { IoLocationSharp  } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";

const details = () => {
  return (
    <div>
      <div className='flex justify-center items-center p-4 m-2 '>
        <div className='border-[#eee] border-[2px] px-3 m-12 rounded-md p-16'>
           <div className='flex justify-center items-center'><IoLocationSharp />
           </div>
           <div className='flex justify-center items-center'>Address</div>
           <div>Flat #3, Modek Plaza #80, G-10/1, Islamabad</div>
        </div>
        <div className='border-[#eee] border-[2px] rounded-md p-16'>
                <div className='flex justify-center items-center'><MdMarkEmailUnread /></div>
                <div className='flex justify-center items-center'>Email</div>
                <div>info@sigtech-online.com</div>
        </div>
      </div>
    </div>
  )
}

export default details
