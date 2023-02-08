import "./About.css";



import React from 'react'

const AboutData = (props) => {
  return (
    <>
    
      <div className="about-text">
      <h1 className="heading">{props.title}</h1>
      <p className="p-text">{props.text1}</p>
      <p className="p-text">{props.text2}</p>
      <p className="p-text">{props.text3}</p>
      <p className="p-text">{props.text4}</p>
      </div>

      
      </>
  )
}

export default AboutData