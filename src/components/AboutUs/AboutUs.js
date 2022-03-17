import React from 'react'
import { Link } from "react-router-dom";
import Aboutus from '../../assets/images/Aboutus.jpg';


export default function AboutUs() {
  return (
    <div className="slider-container">
      <h1 className="gradient__text">About Us</h1>
      <div className="row">
        <div className="about-img "> 
            <img src={Aboutus} alt=""/>
        </div> 
            <div className="twelve columns box">
                <h1 className="gradient__text">Message from Our Founder</h1>
            <div className="text">
                From one glamorous human to another, I wanted to create a safe space for us to be our charming selves,
                <i> from hairstylists that cater to your hair, makeup artists who know how to make that your face POP!</i>
            </div>
            <div className="text">
                <i>and photographers who know how to capture that perfect angle.</i>
            </div>
            </div>  
        </div>
        <div className="row">
            <div className="twelve columns box">
                <h1 className="gradient__text">Message from Our Founder</h1>
            <div className="text">
                From one glamorous human to another, I wanted to create a safe space for us to be our charming selves,
                <i> from hairstylists that cater to your hair, makeup artists who know how to make that your face POP!</i>
            </div>
            <div className="text">
                <i>and photographers who know how to capture that perfect angle.</i>
            </div>
            </div>  
        <div className="about-img "> 
            <img src={Aboutus} alt=""/>
        </div>
    
        </div>
    </div>
  )
}
