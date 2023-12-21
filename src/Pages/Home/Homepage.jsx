import React from 'react'
import "./HomePage.scss"
import Topbar from '../../Components/Topbar/Topbar'
import WhoWeAre from '../../Components/Who We Are/WhoWeAre'
import Compaines from '../../Components/COMPAINES/Compaines'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Footer from '../../Components/Footer/Footer'

const Homepage = () => {
  return (

    <header className='Home_Header'>
      <Topbar />
      <WhoWeAre />
      <Compaines />
      <ContactUs />
      <Footer />
      
    </header>


    
  )
}

export default Homepage