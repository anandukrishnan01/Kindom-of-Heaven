

import React from 'react'
import "./Goa.css"
import lakshadweep from '../assets/lakshadweep.jpg';


const Lakshadweep = () => {
  return (
    <>
    <div className = "head-text">
        <div className = "head-image">
        <img src={lakshadweep} alt="" />
        </div>
        <div className="center__text">
          <h1 className='header'>Goa</h1>
        </div>
        <div className="container">
          
          <p className='para'>The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland.

Foreign tourists, mostly from Europe, arrive in Goa in winter, whilst the summer and monsoon seasons see many Indian tourists. Goa handled 2.29% of all foreign tourist arrivals in the country in 2011.This relatively small state is situated on the west coast of India, between the borders of Maharashtra and Karnataka, and is better known to the world as a former Portuguese enclave on Indian soil. Thus, Tourism forms the backbone of Goa's economy.[3]

Major tourist attractions include Bom Jesus Basilica, Fort Aguada, a wax museum on Indian culture, and a heritage museum. The Churches and Convents of Goa have been declared a World Heritage Site by UNESCO.

As of 2013, Goa was the destination of choice for Indian and foreign tourists, particularly Britons, with limited means who wanted to party. The state was hopeful that changes could be made which would attract a more upscale demographic.

On 24 November 2017, Delta Corp Limited claimed to have set up the first casino game training course centre in India at Goa.

Goa also draws tourists from all over India for its bungee activity, water sports and underwater scuba diving experience.
        </p>

        </div>
    </div>
    <section className='contact mb'>
        {/* <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} /> */}
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
              <input type='number' placeholder='Phone Number' />
            </div>
            <div >
              <input type='number' placeholder='No of Persons' />
              <input type='number' placeholder='Travel Days' />
            </div>
            <div >
              <input type='text' placeholder='Starting Point' />
              <input type='text' placeholder='Destination' />
              
            </div>
            {/* <textarea cols='30' rows='10'></textarea> */}
            <button className='submit' >Submit Here</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Lakshadweep