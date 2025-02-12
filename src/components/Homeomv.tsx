import React from 'react'
import CoreService from "@/components/CoreService";
import Feedback from "@/components/Feedback";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Working from "@/components/Working";
import Footer from "@/components/Footer";
import Homeintro from './Homeintro';

const Homeomv = () => {
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

export default Homeomv


