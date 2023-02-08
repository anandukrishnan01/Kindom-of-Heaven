import React from 'react'
import AboutData from '../Components/AboutData';
import Mainhome from '../Components/Mainhome'
import Navbar from "../Components/Navbar"
import mimg from '../assets/hotairb.jpg';

import Footer from '../Components/Footer';
import Testimonial from '../Components/Testimonial';


const About = () => {
  return (
    <>
      <Navbar />
      <Mainhome
        cName="about"
        mainimg={mimg}
        title="Discover the real value of travel with Kindom Of Heaven"
        btnClass="hide" />
      <AboutData
        title="Why Kindom of Heaven?"
        text1="We,re on a mission to help people discover the real value of travel — to inspire, to give more reasons, to make it easy — for you to go. Our company was founded back in 2005, and since then, we’ve imagined and created some of the most well-loved products for travelers all around the world."
        text2="Today, Kindom Of Heaven is used by millions of people every month — people who travel for adventure, for work, for family and for many other reasons. That’s why we work tirelessly to make your experience of planning & booking flights, hotels and trips as seamless as possible."
        text3="Kindom Of Heaven is more than just an app, a website or a company. Kindom Of Heaven is an idea and belief that everyone has an innate desire and yearning to travel — to experience, to live and to grow."
        text4="So ingrained is this idea of the human need to travel that we’ve woven this emotional and eternal question of “why we go?” into the name of our organisation — Kindom Of Heaven."

      />
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default About