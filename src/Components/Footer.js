import './FooterStyles.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsWhatsapp,BsInstagram,BsTwitter } from 'react-icons/bs';

import React from 'react'

const Footer = () => {
  return (
    <div className='footer mt-5'>
        <div className="top">
            <div>
                <h1>Kindom of Heaven</h1>
                <p>Choose ur favourite destinations .</p>
            </div>
            
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issuses</a>
                <a href="/">Project</a>
                <a href="/">Twitter </a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
                
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
                
            </div>
        </div>
        <div className='icons' >
              <a className='icon' href="/" style={{ color:'blue',fontSize: '2rem',marginLeft:'1rem'}}><FaFacebookSquare/></a>
              <a className='icon' href="/" style={{ color:'green',fontSize: '2rem',marginLeft:'1rem'}}><BsWhatsapp/></a>
              <a className='icon' href="/" style={{ color:'tomato',fontSize: '2rem',marginLeft:'1rem'}}><BsInstagram/></a>
              <a className='icon' href="/" style={{ color:'skyblue',fontSize: '2rem',marginLeft:'1rem'}}><BsTwitter/></a>  
            </div>
    </div>
  )
}

export default Footer
