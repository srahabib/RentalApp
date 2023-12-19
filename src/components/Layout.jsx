import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import MAIN from './Main'
import Hero from './Hero/Hero'
import HouseCard from './HouseCard/HouseCard'




const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <Hero/>
        <HouseCard/>
        <MAIN/>
        
        
        {children}

        <Footer />
       
    </>
  )
}

export default Layout