import React from 'react'
import Navbar from '@/components/Navbar'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import Contactusform from '@/components/Contactusform'
import Contactusintro from '@/components/Contactusintro'
const page = () => {
  return (
    <div>
      <Navbar/>
      <Contactusintro/>
       <Details/>
       <Contactusform/>
       <Footer/>
    </div>
  )
}

export default page
