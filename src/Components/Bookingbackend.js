import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import API from '../API';
import Footer from './Footer';
import Staffnavbar from "../Components/Staffnavbar"


const Bookingbackend = () => {
    const [travel, setTravel] = useState([]);

    useEffect(() => {
        refreshBooking();
    
    }, []);

    const refreshBooking = () => {
        API.get("/travel/")
            .then((res) => {
                setTravel(res.data);
            })
            .catch(console.error);
    };

  return (
    <>
    <Staffnavbar/>
    <div className='container'  style={{marginTop:"15%"}}>
            <div>
                <h1 style={{fontFamily:'cursive',marginBottom:"4%",marginLeft:"9%"}}>package booking details</h1>
                <hr/>
            </div>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        
                        <th> Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>No of persons</th>
                        <th>Total days</th>
                        <th>Travel Date</th>
                        <th>Starting point</th>
                        <th>Destination</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {travel.map((item ,index)=> {
                        return (
                            <tr key={index}>
                                
                                <td >{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phno}</td>
                                <td>{item.persons}</td>
                                <td>{item.days}</td>
                                <td>{item.date}</td>
                                <td>{item.startpoint}</td>
                                <td>{item.destination}</td>

                                
                                
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

export default Bookingbackend