import React from 'react'
import Mainhome from '../Components/Mainhome'
import Navbar from "../Components/Navbar"
import mimg from '../assets/map1.jpg';
import Destination from '../Components/Destination';
import Footer from '../Components/Footer';
import Backendtestmonial from '../Components/Backendtestmonial';


const Home = () => {
  return (
    <>
    <Navbar/>
     <Mainhome
     cName="mainhome"
     mainimg={mimg}
     title="Your Journey Your Story"
     text="Choose Your Favourite Destinations."
     buttonText="Travel Plan"
     url="/service"
     btnClass="show"/>
     <Destination/>
     <Backendtestmonial/>
     <Footer/>
    </>
  )
}

export default Home