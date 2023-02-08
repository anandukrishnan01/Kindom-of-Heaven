import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'// import { Link } from "react-router-dom";
// import SweetAlert from 'react-bootstrap-sweetalert';
import { Form, FormGroup, Input,Col } from "reactstrap";
import API from '../API';

import "./Testimonial.css";

const Testimonial = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [desc, setDesc] = useState("");
  // const [review, setReview] = useState([]);

  useEffect(() => {
      refreshReview();

  }, []);

  const refreshReview = () => {
      API.get("/")
          .then((res) => {
              setName("");
              setEmail("");
              setRating("");
              setDesc("");
          })
          .catch(console.error);
  };


  const onSubmit = (e) => {
    
      e.preventDefault();
      let item = { name, email, rating, desc };
      
      API.post("/review/", item).then(() => popup(),refreshReview());
      

  };

  function popup(){
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Thankyou for feedback ',
      showConfirmButton: false,
      timer: 1900
    })
  }
  return (
    <div className='review'>
      <h2 >We'd love some feedback</h2>
      <hr/>
      <Col lg="7" md="7">
        <Form style={{ marginLeft: "15%" }}>
          
          
          <FormGroup className="contact__form" >
            <Input placeholder="Your Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormGroup>
          <FormGroup className="contact__form">
            <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </FormGroup>
          <FormGroup className="contact__form">
            <Input placeholder="Rating /5" type="number" value={rating} onChange={(e) => setRating(e.target.value)}/>
          </FormGroup>
          <FormGroup className="contact__for" id="message">
            <textarea
              rows="5"
              cols="80"

              placeholder="Describe your valuable feedback."
              className="textarea "
              value={desc} onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </FormGroup>


          <button className=" contact__btn" type="submit" onClick={onSubmit} >
            Send Message
          </button>
        </Form>
      </Col>

    </div>
  )
}

export default Testimonial


// 
// value={email} onChange={(e) => setEmail(e.target.value)}
// value={rating} onChange={(e) => setPhno(e.target.value)}
// value={message} onChange={(e) => setMessage(e.target.value)}
// onClick={onSubmit}


