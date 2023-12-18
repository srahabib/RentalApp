import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import MAIN from './Main'
import Hero from './Hero/Hero'




const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <Hero/>
        <MAIN/>
        
        {children}

        <Footer />
       
    </>
  )
}

export default Layout