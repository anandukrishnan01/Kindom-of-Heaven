import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import API from '../API';
import Footer from './Footer';
import Staffnavbar from "../Components/Staffnavbar"

const Enquiresbackend = () => {
    const [contacts, setContact] = useState([]);

    useEffect(() => {
        refreshBooking();
    
    }, []);

    const refreshBooking = () => {
        API.get("/contact/")
            .then((res) => {
                setContact(res.data);
            })
            .catch(console.error);
    };

  return (
    <>
    <Staffnavbar/>
    <div className='container'  style={{marginTop:"15%"}}>
            <div>
                <h1 style={{fontFamily:'cursive',marginBottom:"4%",marginLeft:"9%"}}>Enquires details</h1>
                <hr/>
            </div>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        
                        <th> Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Message</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((item ,index)=> {
                        return (
                            <tr key={index}>
                                
                                <td >{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phno}</td>
                                <td>{item.message}</td>
                                

                                
                                
                            </tr>
                        );


                    })}

                </tbody>
            </Table>
        </div>
        <Footer/>
        </>
  )
}

export default Enquiresbackend