import React from 'react'
import Feedback from "@/components/Feedback";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Working from "@/components/Working";
import Footer from "@/components/Footer";
import Homeintro from '@/components/Homeintro';
import CoreService from '@/components/CoreService';
const page = () => {
  return (
    <div>
      <Navbar />
       <Homeintro/>
    <Services/>
    <Working/>
    <CoreService/>
    <Feedback/>
    <Footer/>
    </div>
  )
}

export default page
