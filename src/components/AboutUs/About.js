import React from 'react';
import "./About.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Aboutus from '../../assets/images/Aboutus.jpg';

export default function About() {
    return (
        <div className="about-main">
        <div className="about">
          <div className="about-me">
          </div>
            <div className="about-container gradient__bg">
                <div className="twelve columns box">
                     <div className="text">
                 <h1 className="gradient__text">Message from Our Founder</h1>
                    From one glamorous human to another, I wanted to create a safe space for us to be our charming selves,
                    <i> from hairstylists that cater to your hair, makeup artists who know how to make that your face POP!</i>
                    <i>and photographers who know how to capture that perfect angle.</i><br/>
                    <br/>
                    <Button className='btnName' component={Link} variant="outlined" type="button" to="/AboutUs">More about us</Button>
                     </div>
                    <div className="about-img"> 
                        <img src={Aboutus} alt=""/>
                    </div> 
            </div>
        </div>
      </div>
      </div>
      )
}