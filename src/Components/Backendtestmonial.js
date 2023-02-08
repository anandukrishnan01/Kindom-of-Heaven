

import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import API from '../API';

const Backendtestmonial = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        refreshReview();
  
    },[]);
  
    const refreshReview = () => {
        API.get("/review/")
            .then((res) => {
                setReview(res.data);
            })
            .catch(console.error);
    };
    return (
        
        <div>
            <h2 style={{marginBottom:"4%", fontFamily:"revert-layer",marginLeft:"7%"}}>Testimonial reviews</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        
                        <th> Name</th>
                        <th>email</th>
                        <th>rating</th>
                        <th>desc</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {review.map((item ,index)=> {
                        return (
                            <tr key={index}>
                                
                                <td >{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.rating}</td>
                                <td>{item.desc}</td>
                                
                                
                            </tr>
                        );


                    })}

                </tbody>
            </Table>
        </div>
    )
}

export default Backendtestmonial


