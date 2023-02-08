import React, { useEffect, useState } from 'react'

// import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import API from '../API';
import Swal from 'sweetalert2'
import "./contactdatastyle.css";
import { MdEmail } from 'react-icons/md';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { TbMessages } from 'react-icons/tb';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsWhatsapp,BsInstagram,BsTwitter } from 'react-icons/bs';




const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phno, setPhno] = useState("");
    const [message, setMessage] = useState("");
    // const [contacts, setContact] = useState([]);

    useEffect(() => {
        refreshContact();

    }, []);

    const refreshContact = () => {
        API.get("/")
            .then((res) => {
                setName("");
                setEmail("");
                setPhno("");
                setMessage("");
            })
            .catch(console.error);
    };

    function popup(){
        Swal.fire({
          
          icon: 'false',
          title: 'Thankyou for your patience',
          text: 'We will contact you shortly :)',
          showConfirmButton: false,
          timer: 1900
        })
      }

    const onSubmit = (e) => {
        e.preventDefault();
        let item = { name, email, phno, message };
        API.post("/contact/", item).then(() =>popup(), refreshContact());
    };
    return (

        <section>
            <Container className="abc">
                <Row>
                    <Col lg="7" md="7">
                        <h1 style={{ marginBottom: "2%", fontFamily: 'inherit', color: "tomato" }}>Get In Touch With Us</h1>

                        <h6 style={{ marginBottom: "12%", marginLeft: "4%" }}>If you can't find an answer to your questions, please don't hesitate to contact us.</h6>
                        <div style={{ marginBottom: "9%", marginLeft: "15%" }}>
                            <h3 style={{ fontWeight: "bold", color: "lightsalmon" }}>Kindom Of Heaven Travel Company</h3>
                            <p>Indira Gandhi Road, Kozhikode - 673004 Kerala, India</p>
                            <div className="contact__info" style={{ marginTop: "5%", marginLeft: "" }}>
                                <h4 className="fw-bold">Contact Information</h4>


                                <div className=" d-flex align-items-center gap-2">
                                    <a className='icon' href="/" style={{ color: 'black', fontSize: '2rem', marginLeft: '1rem' }}><MdEmail /></a>
                                    <h6 className="mb-0 fs-6">Email:</h6>
                                </div>
                                <form action="" className="mb-0 fs-6" style={{ marginBottom: "9%", marginLeft: "15%" }}>
                                    <a href="/" style={{ textDecoration: "none" }}><p className="section__description mb-0">support@kindomofheaven.com</p></a>
                                    <a href="/" style={{ textDecoration: "none" }}><p className="section__description mb-0">kindomofheaven@gmail.com</p></a>
                                </form>


                                <div className=" d-flex align-items-center gap-2">
                                    <a className='icon' href="/" style={{ color: 'black', fontSize: '1.7rem', marginLeft: '1rem' }}><BsTelephoneOutboundFill /></a>

                                    <h6 className="fs-6 mb-0">Call Us:</h6>

                                </div>
                                <form action="" className="mb-0 fs-6" style={{ marginBottom: "9%", marginLeft: "15%" }}>
                                    <p style={{ marginTop: "-1%" }}>Supports All Languages</p>
                                    <a href="/" style={{ textDecoration: "none" }}><p className="section__description mb-0" >+91 8157044078</p></a>
                                    <p>India (24 hours)</p>

                                    <a href="/" style={{ textDecoration: "none" }}><p className="section__description mb-0" >+202–21279930</p></a>
                                    <p>World Wide (24 hours)</p>

                                </form>

                                <div className=" d-flex align-items-center gap-2" style={{marginTop:"-2%"}}>
                                    <a className='icon' href="/" style={{ color: 'black', fontSize: '3rem', marginLeft: '1rem' }}><TbMessages /></a>

                                    <h6 className="fs-6 mb-0">Live Chat:</h6>
                                    <a href="/" style={{ textDecoration: "none" }}>+971588250786</a>

                                </div>





                                <h6 className="fw-bold mt-5">Follow Us</h6>
                                <div>
              <a className='icon' href="/" style={{ color:'blue',fontSize: '2rem',marginLeft:'1rem'}}><FaFacebookSquare/></a>
              <a className='icon' href="/" style={{ color:'green',fontSize: '2rem',marginLeft:'1rem'}}><BsWhatsapp/></a>
              <a className='icon' href="/" style={{ color:'tomato',fontSize: '2rem',marginLeft:'1rem'}}><BsInstagram/></a>
              <a className='icon' href="/" style={{ color:'skyblue',fontSize: '2rem',marginLeft:'1rem'}}><BsTwitter/></a>  
            </div>
        </div>


                            </div>


                        
                        <Form style={{ marginLeft: "15%" }}>
                            <h3 style={{  fontFamily: 'sans-serif' }}>MAKE AN ENQUIRY</h3>
                            <p style={{marginBottom:"6%"}}>Send us a message and we’ll get back to you in few hours. In the meantime, check our FAQs to see if your question has already been answered.</p>
                            <FormGroup className="contact__form">
                                <Input placeholder="Your Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </FormGroup>
                            <FormGroup className="contact__form">
                                <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup className="contact__form">
                                <Input placeholder="Contact" type="number" value={phno} onChange={(e) => setPhno(e.target.value)} />
                            </FormGroup>
                            <FormGroup className="contact__for" id="message">
                                <textarea
                                    rows="5"
                                    cols="77"

                                    placeholder="Message"
                                    className="textarea "
                                    value={message} onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </FormGroup>


                            <button className=" contact__btn" type="submit" onClick={onSubmit}>
                                Send Message
                            </button>
                        </Form>
                    </Col>

                    <Col lg="7" md="7">

                    </Col>
                </Row>
            </Container>
        </section>

    );
};
export default Contact;


