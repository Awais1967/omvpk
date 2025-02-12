import React from 'react'
import Navbar from '@/components/Navbar'
import Aboutusintro from '@/components/Aboutusintro'
import Working from '@/components/Working'
import Footer from '@/components/Footer'
import Feedback from '@/components/Feedback'
import OurView from '@/components/OurView'


const page = () => {
  return (
    <div>
       <Navbar/>
       <Aboutusintro/>
       <Working/>
       <OurView/>
       <Feedback/>
       <Footer/>
    </div>
  )
}

export default page
