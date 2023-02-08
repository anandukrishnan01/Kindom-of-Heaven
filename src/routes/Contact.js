import React from 'react'
import ContactData from '../Components/ContactData'

import Mainhome from '../Components/Mainhome'
import Navbar from "../Components/Navbar"
import mimg from '../assets/2.jpg';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <>
    <Navbar/>
     <Mainhome
     cName="about"
     mainimg={mimg}
     title="How can we help you?  "
     
     btnClass="hide"/>
     <ContactData/>
     <Footer/>
    </>
  )
}

export default Contact