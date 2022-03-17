import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contactus.css';
import { FaPaperPlane } from 'react-icons/fa';
// import { Button } from './Style';
const Result =()  =>{
  return (
      <p>Successfully sent, i will contact you soon!!!</p>
  )
}

export default function Contactus() {
  const [result, showResult] = useState(false)
  

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_i3hm0fo', 'template_dyh00n3', e.target, 'user_gW9TUWQZjoCki5des3Nks')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    showResult(true);
};


  return (
    <div className="h gradient__bg">
      <div className="contact-containter">
        <div className="contact-header">
          <h1 className="gradient__text">Contact Us</h1>
          <p>Lets keep in Touch</p>
          <div className="inTouch">
            <div className="touch">
              <div className="contact-liner">
                <h1>Get In Touch</h1>
              <div className="onMove">
              <div className="move">
              <form action="" onSubmit={sendEmail}>
              <div className="formWord">
                <span>Full Name</span>
                  <br />
                  <input className="input100"type="text" name="fullName" placeholder="Your name.." required />
                  <br />
                  <span>Phone Number</span>
                  <br />
                  <input className="input100" type="tel" name="phone" placeholder="+0800000000" required />
                  <br />
                  <span>Enter Email</span>
                  <br />
                  <input className="input100" type="text" name="email" placeholder="vascoeti@gmail.com" required />
                  <br />
                    <span>message</span>
                  <br/>
                  <textarea name="message" required></textarea>
                  
                  <button className="send">Send<FaPaperPlane /></button>
                    <p className="rows">
                      {
                        result ? <Result/> : null
                      }
                  </p>
                </div>
              </form>
              </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
