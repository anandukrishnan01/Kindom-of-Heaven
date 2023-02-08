import React, { useEffect, useState } from 'react'
import "./Goa.css"
import goa from '../assets/goa.jpg';
import API from '../API';
import Swal from 'sweetalert2'
import Footer from '../Components/Footer';

const Goa = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [persons, setPersons] = useState("");
  const [days, setDays] = useState("");
  const [date, setDate] = useState("");
  const [startpoint, setStartpoint] = useState("");
  const [destination, setDestination] = useState("");
  // const [travel, setTravel] = useState([]);

  useEffect(() => {
    refreshBooking();

  }, []);

  const refreshBooking = () => {
    API.get("/")
      .then((res) => {
        setName("");
        setEmail("");
        setPhno("");
        setPersons("");
        setDays("");
        setDate("");
        setStartpoint("");
        setDestination("");
      })
      .catch(console.error);
  };
  function popup(){
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'We will contact you soon...!',
      text:'to inform the package details and payments 😊',
      showConfirmButton: false,
      timer: 2000
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { name, email, phno, persons, days, date, startpoint, destination:"Goa" };
    API.post("/travel/", item).then(() => popup(),refreshBooking());
  };
  return (
    <>
      <div className="head-text">
        <div className="head-image">
          <img src={goa} alt="" />
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
            <h3>Fillup The Form</h3> <br />
            <div>
              <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
              <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type='text' placeholder='Phone Number' value={phno} onChange={(e) => setPhno(e.target.value)} />
            </div>
            <div >
              <input type='text' placeholder='No of Persons' value={persons} onChange={(e) => setPersons(e.target.value)} />
              <input type='text' placeholder='Travel Days' value={days} onChange={(e) => setDays(e.target.value)} />
              <input type='date' placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div >
              <input type='text' placeholder='Starting Point' value={startpoint} onChange={(e) => setStartpoint(e.target.value)} />
              <input type='text' placeholder="Destination: Goa" disabled  />

            </div>
            {/* <textarea cols='30' rows='10'></textarea> */}
            <button className='submit' type='submit' onClick={onSubmit} >Submit Here</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Goa